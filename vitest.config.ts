import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: [
        'packages/ldap/src/test/**/*.spec.mts',
        'packages/x500/test/jest/**/*.spec.mts'
    ],
    exclude: ['node_modules', 'dist', '.nx'],
  },
  resolve: {
    alias: {
      '@wildboar/x500': resolve(__dirname, './packages/x500'),
      '@wildboar/acbio': resolve(__dirname, './packages/acbio'),
      '@wildboar/acse': resolve(__dirname, './packages/acse'),
      '@wildboar/ansi-x9-42': resolve(__dirname, './packages/ansi-x9-42'),
      '@wildboar/ansi-x9-62': resolve(__dirname, './packages/ansi-x9-62'),
      '@wildboar/asn1soap': resolve(__dirname, './packages/asn1soap'),
      '@wildboar/attribute-asn1module': resolve(__dirname, './packages/attribute-asn1module'),
      '@wildboar/bip': resolve(__dirname, './packages/bip'),
      '@wildboar/cades': resolve(__dirname, './packages/cades'),
      '@wildboar/casscam': resolve(__dirname, './packages/casscam'),
      '@wildboar/cbeff': resolve(__dirname, './packages/cbeff'),
      '@wildboar/ccr': resolve(__dirname, './packages/ccr'),
      '@wildboar/cinf': resolve(__dirname, './packages/cinf'),
      '@wildboar/clacse': resolve(__dirname, './packages/clacse'),
      '@wildboar/clearance-sponsor-attribute': resolve(__dirname, './packages/clearance-sponsor-attribute'),
      '@wildboar/cmail': resolve(__dirname, './packages/cmail'),
      '@wildboar/cmip': resolve(__dirname, './packages/cmip'),
      '@wildboar/cmp': resolve(__dirname, './packages/cmp'),
      '@wildboar/cms': resolve(__dirname, './packages/cms'),
      '@wildboar/copp': resolve(__dirname, './packages/copp'),
      '@wildboar/crmf': resolve(__dirname, './packages/crmf'),
      '@wildboar/device-owner-attribute': resolve(__dirname, './packages/device-owner-attribute'),
      '@wildboar/ec-private-key': resolve(__dirname, './packages/ec-private-key'),
      '@wildboar/ers': resolve(__dirname, './packages/ers'),
      '@wildboar/ess': resolve(__dirname, './packages/ess'),
      '@wildboar/fast-infoset': resolve(__dirname, './packages/fast-infoset'),
      '@wildboar/ftam': resolve(__dirname, './packages/ftam'),
      '@wildboar/gmi-attributemodule': resolve(__dirname, './packages/gmi-attributemodule'),
      '@wildboar/guls': resolve(__dirname, './packages/guls'),
      '@wildboar/isis': resolve(__dirname, './packages/isis'),
      '@wildboar/iso-9798-3-sasl': resolve(__dirname, './packages/iso-9798-3-sasl'),
      '@wildboar/iso19785': resolve(__dirname, './packages/iso19785'),
      '@wildboar/kerberos5': resolve(__dirname, './packages/kerberos5'),
      '@wildboar/ldap': resolve(__dirname, './packages/ldap'),
      '@wildboar/m3100': resolve(__dirname, './packages/m3100'),
      '@wildboar/nlm': resolve(__dirname, './packages/nlm'),
      '@wildboar/ocsp': resolve(__dirname, './packages/ocsp'),
      '@wildboar/pc': resolve(__dirname, './packages/pc'),
      '@wildboar/pkcs': resolve(__dirname, './packages/pkcs'),
      '@wildboar/pki-stub': resolve(__dirname, './packages/pki-stub'),
      '@wildboar/qc': resolve(__dirname, './packages/qc'),
      '@wildboar/rinf': resolve(__dirname, './packages/rinf'),
      '@wildboar/rose': resolve(__dirname, './packages/rose'),
      '@wildboar/rtse': resolve(__dirname, './packages/rtse'),
      '@wildboar/safecurves-pkix-18': resolve(__dirname, './packages/safecurves-pkix-18'),
      '@wildboar/scrypt-0': resolve(__dirname, './packages/scrypt-0/src/index.ts'),
      '@wildboar/scvp': resolve(__dirname, './packages/scvp'),
      '@wildboar/sec1': resolve(__dirname, './packages/sec1'),
      '@wildboar/sio': resolve(__dirname, './packages/sio'),
      '@wildboar/spkac': resolve(__dirname, './packages/spkac'),
      '@wildboar/t38': resolve(__dirname, './packages/t38'),
      '@wildboar/tal': resolve(__dirname, './packages/tal'),
      '@wildboar/tcap': resolve(__dirname, './packages/tcap'),
      '@wildboar/tsp': resolve(__dirname, './packages/tsp'),
      '@wildboar/usm': resolve(__dirname, './packages/usm'),
      '@wildboar/x1080': resolve(__dirname, './packages/x1080'),
      '@wildboar/x400': resolve(__dirname, './packages/x400'),
      '@wildboar/x700': resolve(__dirname, './packages/x700'),
    },
  },
});
