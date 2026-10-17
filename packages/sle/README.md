# Space Link Extension (SLE)

ASN.1 data structures and PDUs for the CCSDS Space Link Extension (SLE)
transfer services. The compiled modules cover the return all frames service
(CCSDS 911.1-B-5), return channel frames, return operational control field,
CLTU, and forward space packet services, plus the shared SLE types.
This module is ESM-only.

Assignments that are copied verbatim (`TimeoutPeriod`, `VcId`, `LockStatus`,
and the other types under `src/lib/shared`) are defined once and re-exported
from every service module that repeats them. Other assignments share a name
but are different types, so each ASN.1 module is still its own entrypoint.
Those are `GvcId` (CLTU and FSP use different constraints from the return
services), `Notification` (the production-status alternative is per service),
`CurrentReportingCycle` (`cyclicReport` versus `periodicReporting`),
`BufferSize`, `FrameOrNotification`, and `ClcwGvcId` (FSP spells the configured
alternative `congigured`).

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


## Usage Example

```typescript
import * as $ from "@wildboar/asn1/functional";
import {
    ParameterName_apidList,
} from "@wildboar/sle/CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES";
import {
    _decode_FspGetParameter,
    _encode_FspGetParameter,
    FspGetParameter_parApidList
} from "@wildboar/sle/CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES";

const original = {
    parApidList: new FspGetParameter_parApidList(
        ParameterName_apidList,
        { apidList: [0, 1, 2047] },
    ),
};
const encoded = _encode_FspGetParameter(original, $.BER).toBytes();
```

## AI Usage Statement

This package was onboarded from raw ASN.1 compiler outputs using AI
(Grok 4.7) on 13 October 2026.
