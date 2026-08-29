/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary ServiceReportCause
 * @description
 *
 * Registered reason for a service-report notification. Syntax is
 * an object identifier; X.740 registers six values under
 * `serviceReportCause` (request, denial, response, failure,
 * recovery, other). Additional causes may be registered
 * outside this Rec. using X.208 procedures. Shall be supplied
 * when the event type is service report. ITU-T Rec. X.740
 * (09/92)
 * [§8.1.2](https://www.itu.int/rec/T-REC-X.740-199209-I),
 * §11.2.6, A.3, A.5.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ServiceReportCause  ::=  OBJECT IDENTIFIER
 * ```
 */
export type ServiceReportCause = OBJECT_IDENTIFIER; // ObjectIdentifierType




export const _decode_ServiceReportCause = $._decodeObjectIdentifier;




export const _encode_ServiceReportCause = $._encodeObjectIdentifier;


/* eslint-enable */
