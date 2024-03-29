FROM ghcr.io/nodecg/nodecg:2
LABEL org.opencontainers.image.source=https://github.com/BalonmanoVetusta/handball-liveshow-spain

ARG NODECG_BUNDLE_NAME=handball-liveshow-spain
ARG NODECG_PORT=9090
ARG NODECG_HOST=0.0.0.0

WORKDIR /opt/nodecg
USER nodecg

COPY --chown=nodecg:nodecg cfg/nodecg* cfg/
COPY --chown=nodecg:nodecg package.json bundles/${NODECG_BUNDLE_NAME}/package.json
COPY --chown=nodecg:nodecg cfg bundles/${NODECG_BUNDLE_NAME}/cfg
COPY --chown=nodecg:nodecg assets bundles/${NODECG_BUNDLE_NAME}/assets
COPY --chown=nodecg:nodecg schemas bundles/${NODECG_BUNDLE_NAME}/schemas
COPY --chown=nodecg:nodecg dashboard bundles/${NODECG_BUNDLE_NAME}/dashboard
COPY --chown=nodecg:nodecg graphics bundles/${NODECG_BUNDLE_NAME}/graphics
COPY --chown=nodecg:nodecg extension bundles/${NODECG_BUNDLE_NAME}/extension

EXPOSE ${NODECG_PORT:-9090}/tcp

VOLUME /opt/nodecg/cfg /opt/nodecg/bundles /opt/nodecg/logs /opt/nodecg/db /opt/nodecg/assets
CMD ["node", "/opt/nodecg/index.js"]
