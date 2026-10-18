# LTANS SCVP Extension in TypeScript

ASN.1 data structures from
[IETF RFC 5276](https://www.rfc-editor.org/rfc/rfc5276), which defines
how the Server-Based Certificate Validation Protocol (SCVP) conveys
long-term evidence records. `EvidenceRecord` is provided by
[`@wildboar/ers`](https://jsr.io/@wildboar/ers).

This module is ESM-only.

See the
[documentation](https://github.com/Wildboar-Software/asn1-typescript-libraries/blob/master/docs/all.md)
that applies to this library and others to learn how to use this module.

These libraries were generated entirely or in part by the
[ASN.1 Compilation Service](https://wildboarsoftware.com/asn1-compilation)
offered by [Wildboar Software](https://wildboarsoftware.com). The ASN.1
compiler itself is closed-source and proprietary, but some of the libraries
produced with it are released publicly under the
[MIT license](https://mit-license.org/).

If you would like to see additional ASN.1 libraries in TypeScript or other
programming languages, or if you have any other questions, please contact us at
[contact@wildboarsoftware.com](mailto:contact@wildboarsoftware.com).

## Example Usage

```typescript
import { ObjectIdentifier } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ContentInfo, id_data } from "@wildboar/cms";
import {
    ArchiveTimeStamp,
    EvidenceRecord,
    EvidenceRecord_version_v1,
} from "@wildboar/ers";
import { AlgorithmIdentifier } from "@wildboar/pki-stub";
import {
    EvidenceRecordWantBack,
    _encode_EvidenceRecordWantBack,
    id_swb_ers_pkc_cert,
} from "@wildboar/ltans-scvp-extension";

const sha256 = ObjectIdentifier.fromParts([2, 16, 840, 1, 101, 3, 4, 2, 1]);

function evidenceRecord(): EvidenceRecord {
    const digest = new AlgorithmIdentifier(sha256);
    const timeStamp = new ContentInfo(
        id_data,
        $._encodeOctetString(new Uint8Array([1, 2, 3, 4]), $.BER),
    );
    const archiveTimeStamp = new ArchiveTimeStamp(
        undefined,
        undefined,
        undefined,
        timeStamp,
    );
    return new EvidenceRecord(
        EvidenceRecord_version_v1,
        [digest],
        undefined,
        undefined,
        [[archiveTimeStamp]],
    );
}

const original = new EvidenceRecordWantBack(id_swb_ers_pkc_cert, evidenceRecord());
const encoded = _encode_EvidenceRecordWantBack(original, $.BER).toBytes();
```

## AI Usage Statement

This package was onboarded from the raw compiler outputs using AI
(Cursor Grok 4.7) on 17 October 2026.
