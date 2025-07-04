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
import { mHSExtendedNetworkAddress } from '../MHSRoutingORAddressSubtree/mHSExtendedNetworkAddress.oa.mjs';
import { mHSExtendedNetworkAddressAttribute } from '../MHSRoutingORAddressSubtree/mHSExtendedNetworkAddressAttribute.oa.mjs';
import { id_nf_mhs_extended_network_address } from '../MHSRoutingObjectIdentifiers/id-nf-mhs-extended-network-address.va.mjs';
import { NAME_FORM } from '@wildboar/x500/InformationFramework';
/**
 * @summary mHSExtendedNetworkAddressNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mHSExtendedNetworkAddressNameForm NAME-FORM ::= {
 *   NAMES            mHSExtendedNetworkAddress
 *   WITH ATTRIBUTES  {mHSExtendedNetworkAddressAttribute}
 *   ID               id-nf-mhs-extended-network-address
 * }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const mHSExtendedNetworkAddressNameForm: NAME_FORM = {
    class: 'NAME-FORM',
    decoderFor: {},
    encoderFor: {},
    '&namedObjectClass': mHSExtendedNetworkAddress /* OBJECT_FIELD_SETTING */,
    '&MandatoryAttributes': [
        mHSExtendedNetworkAddressAttribute,
    ] /* OBJECT_FIELD_SETTING */,
    '&id': id_nf_mhs_extended_network_address /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
