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
import { mHSNetworkAddress } from '../MHSRoutingORAddressSubtree/mHSNetworkAddress.oa.mjs';
import { mHSNetworkAddressAttribute } from '../MHSRoutingORAddressSubtree/mHSNetworkAddressAttribute.oa.mjs';
import { id_nf_mhs_network_address } from '../MHSRoutingObjectIdentifiers/id-nf-mhs-network-address.va.mjs';
import { NAME_FORM } from '@wildboar/x500/src/lib/modules/InformationFramework/NAME-FORM.oca.mjs';
/**
 * @summary mHSNetworkAddressNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mHSNetworkAddressNameForm NAME-FORM ::= {
 *   NAMES            mHSNetworkAddress
 *   WITH ATTRIBUTES  {mHSNetworkAddressAttribute}
 *   ID               id-nf-mhs-network-address
 * }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const mHSNetworkAddressNameForm: NAME_FORM = {
    class: 'NAME-FORM',
    decoderFor: {},
    encoderFor: {},
    '&namedObjectClass': mHSNetworkAddress /* OBJECT_FIELD_SETTING */,
    '&MandatoryAttributes': [
        mHSNetworkAddressAttribute,
    ] /* OBJECT_FIELD_SETTING */,
    '&id': id_nf_mhs_network_address /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
