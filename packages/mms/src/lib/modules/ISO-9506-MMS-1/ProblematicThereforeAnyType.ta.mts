/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ProblematicThereforeAnyType
 * @description
 *
 * Compiler stand-in for `TYPE-IDENTIFIER.&Type` (`ANY`). The
 * published ISO 9506-2 ASN.1 uses this pattern for
 * AdditionalService-Request/Response and for UnconfirmedService
 * alternatives that a companion standard fills in. This
 * identifier itself is a deviation from the printed standard
 * (see the ISO-9506-MMS-1 ASN.1 module comment). Treat the
 * value as an open type; ISO 9506-1:2003 Annex B defines how
 * companion standards supply the actual syntax.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProblematicThereforeAnyType  ::=  TYPE-IDENTIFIER.&Type
 * ```
 */
export
type ProblematicThereforeAnyType = _Element; // ObjectClassFieldType
export const _decode_ProblematicThereforeAnyType = $._decodeAny;
export const _encode_ProblematicThereforeAnyType = $._encodeAny;


/* eslint-enable */
