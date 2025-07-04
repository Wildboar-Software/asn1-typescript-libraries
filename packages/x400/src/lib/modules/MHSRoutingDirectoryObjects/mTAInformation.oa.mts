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
} from '@wildboar/asn1';
import { type OBJECT_CLASS } from '@wildboar/x500/InformationFramework';
import {
    _enum_for_ObjectClassKind,
    auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_ObjectClassKind,
    _encode_ObjectClassKind,
} from '@wildboar/x500/InformationFramework';
import { mTAName } from '../MHSRoutingDirectoryObjects/mTAName.oa.mjs';
import { globalDomainIdentifier } from '../MHSRoutingDirectoryObjects/globalDomainIdentifier.oa.mjs';
import { mTAPassword } from '../MHSRoutingDirectoryObjects/mTAPassword.oa.mjs';
import { specificPasswords } from '../MHSRoutingDirectoryObjects/specificPasswords.oa.mjs';
import { callingPSAPs } from '../MHSRoutingDirectoryObjects/callingPSAPs.oa.mjs';
import { id_oc_mta_information } from '../MHSRoutingObjectIdentifiers/id-oc-mta-information.va.mjs';
/**
 * @summary mTAInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mTAInformation OBJECT-CLASS ::= {
 *   KIND          auxiliary
 *   MUST CONTAIN  {mTAName | globalDomainIdentifier}
 *   MAY CONTAIN   {mTAPassword | specificPasswords | callingPSAPs}
 *   ID            id-oc-mta-information
 * }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const mTAInformation: OBJECT_CLASS = {
    class: 'OBJECT-CLASS',
    decoderFor: {},
    encoderFor: {},
    '&kind': auxiliary /* OBJECT_FIELD_SETTING */,
    '&MandatoryAttributes': [
        mTAName,
        globalDomainIdentifier,
    ] /* OBJECT_FIELD_SETTING */,
    '&OptionalAttributes': [
        mTAPassword,
        specificPasswords,
        callingPSAPs,
    ] /* OBJECT_FIELD_SETTING */,
    '&id': id_oc_mta_information /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
