/* eslint-disable */
import {
    ASN1Element as _Element,
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SMFMAUpgradeIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMFMAUpgradeIndication  ::=  BOOLEAN
 * ```
 */
export
type SMFMAUpgradeIndication = BOOLEAN; // BooleanType
export const _decode_SMFMAUpgradeIndication: $.ASN1Decoder<SMFMAUpgradeIndication> = $._decodeBoolean;
export const _encode_SMFMAUpgradeIndication: $.ASN1Encoder<SMFMAUpgradeIndication> = $._encodeBoolean;


/* eslint-enable */
