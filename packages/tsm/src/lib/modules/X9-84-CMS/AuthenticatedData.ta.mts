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
import { CMSVersion, _decode_CMSVersion, _encode_CMSVersion } from "../X9-84-CMS/CMSVersion.ta.mjs";

import { RecipientInfos, _decode_RecipientInfos, _encode_RecipientInfos } from "../X9-84-CMS/RecipientInfos.ta.mjs";

import { MACAlgorithmIdentifier, _decode_MACAlgorithmIdentifier, _encode_MACAlgorithmIdentifier } from "../X9-84-CMS/MACAlgorithmIdentifier.ta.mjs";

import { EncapsulatedContentInfo, _decode_EncapsulatedContentInfo, _encode_EncapsulatedContentInfo } from "../X9-84-CMS/EncapsulatedContentInfo.ta.mjs";

import { MessageAuthenticationCode, _decode_MessageAuthenticationCode, _encode_MessageAuthenticationCode } from "../X9-84-CMS/MessageAuthenticationCode.ta.mjs";



/**
 * @summary AuthenticatedData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthenticatedData ::= SEQUENCE {
 *    version           CMSVersion,
 *    recipientInfos    RecipientInfos,
 *    macAlgorithm      MACAlgorithmIdentifier,
 *    encapContentInfo  EncapsulatedContentInfo,
 *    mac               MessageAuthenticationCode
 * }
 * ```
 * 
 * @class
 */
export
class AuthenticatedData {
    constructor (
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: CMSVersion,
        /**
         * @summary `recipientInfos`.
         * @public
         * @readonly
         */
        readonly recipientInfos: RecipientInfos,
        /**
         * @summary `macAlgorithm`.
         * @public
         * @readonly
         */
        readonly macAlgorithm: MACAlgorithmIdentifier,
        /**
         * @summary `encapContentInfo`.
         * @public
         * @readonly
         */
        readonly encapContentInfo: EncapsulatedContentInfo,
        /**
         * @summary `mac`.
         * @public
         * @readonly
         */
        readonly mac: MessageAuthenticationCode
    ) {}

    /**
     * @summary Restructures an object into a AuthenticatedData
     * @description
     * 
     * This takes an `object` and converts it to a `AuthenticatedData`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AuthenticatedData`.
     * @returns {AuthenticatedData}
     */
    public static _from_object (_o: { [_K in keyof (AuthenticatedData)]: (AuthenticatedData)[_K] }): AuthenticatedData {
        return new AuthenticatedData(_o.version, _o.recipientInfos, _o.macAlgorithm, _o.encapContentInfo, _o.mac);
    }


}

/**
 * @summary The Leading Root Component Types of AuthenticatedData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AuthenticatedData: $.ComponentSpec[] = [
    new $.ComponentSpec("version", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("recipientInfos", false, $.hasTag(_TagClass.universal, 17)),
    new $.ComponentSpec("macAlgorithm", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("encapContentInfo", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("mac", false, $.hasTag(_TagClass.universal, 4))
];

/**
 * @summary The Trailing Root Component Types of AuthenticatedData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AuthenticatedData: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AuthenticatedData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AuthenticatedData: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AuthenticatedData: $.ASN1Decoder<AuthenticatedData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuthenticatedData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AuthenticatedData (el: _Element): AuthenticatedData {
    if (!_cached_decoder_for_AuthenticatedData) { _cached_decoder_for_AuthenticatedData = function (el: _Element): AuthenticatedData {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 5) {
        throw new _ConstructionError("AuthenticatedData contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "version";
    sequence[1].name = "recipientInfos";
    sequence[2].name = "macAlgorithm";
    sequence[3].name = "encapContentInfo";
    sequence[4].name = "mac";
    let version!: CMSVersion;
    let recipientInfos!: RecipientInfos;
    let macAlgorithm!: MACAlgorithmIdentifier;
    let encapContentInfo!: EncapsulatedContentInfo;
    let mac!: MessageAuthenticationCode;
    version = _decode_CMSVersion(sequence[0]);
    recipientInfos = _decode_RecipientInfos(sequence[1]);
    macAlgorithm = _decode_MACAlgorithmIdentifier(sequence[2]);
    encapContentInfo = _decode_EncapsulatedContentInfo(sequence[3]);
    mac = _decode_MessageAuthenticationCode(sequence[4]);
    return new AuthenticatedData(
        version,
        recipientInfos,
        macAlgorithm,
        encapContentInfo,
        mac,

    );
}; }
    return _cached_decoder_for_AuthenticatedData(el);
}

let _cached_encoder_for_AuthenticatedData: $.ASN1Encoder<AuthenticatedData> | null = null;

/**
 * @summary Encodes a(n) AuthenticatedData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthenticatedData, encoded as an ASN.1 Element.
 */
export
function _encode_AuthenticatedData (value: AuthenticatedData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AuthenticatedData) { _cached_encoder_for_AuthenticatedData = function (value: AuthenticatedData): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_CMSVersion(value.version, $.BER),
            /* REQUIRED   */ _encode_RecipientInfos(value.recipientInfos, $.BER),
            /* REQUIRED   */ _encode_MACAlgorithmIdentifier(value.macAlgorithm, $.BER),
            /* REQUIRED   */ _encode_EncapsulatedContentInfo(value.encapContentInfo, $.BER),
            /* REQUIRED   */ _encode_MessageAuthenticationCode(value.mac, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AuthenticatedData(value, elGetter);
}


/* eslint-enable */
