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
} from 'asn1-ts';
import { connectionGroup } from '../MHSRoutingDirectoryObjects/connectionGroup.oa.mjs';
import { commonName } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/commonName.oa.mjs';
import { id_nf_connection_group } from '../MHSRoutingObjectIdentifiers/id-nf-connection-group.va.mjs';
import { NAME_FORM } from '@wildboar/x500/src/lib/modules/InformationFramework/NAME-FORM.oca.mjs';
/**
 * @summary connectionGroupNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * connectionGroupNameForm NAME-FORM ::= {
 *   NAMES            connectionGroup
 *   WITH ATTRIBUTES  {commonName}
 *   ID               id-nf-connection-group
 * }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const connectionGroupNameForm: NAME_FORM = {
    class: 'NAME-FORM',
    decoderFor: {},
    encoderFor: {},
    '&namedObjectClass': connectionGroup /* OBJECT_FIELD_SETTING */,
    '&MandatoryAttributes': [commonName] /* OBJECT_FIELD_SETTING */,
    '&id': id_nf_connection_group /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
