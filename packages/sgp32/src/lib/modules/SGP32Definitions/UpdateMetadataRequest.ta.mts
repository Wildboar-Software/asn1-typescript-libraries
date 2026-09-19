/* eslint-disable */
import {
    BOOLEAN,
    OCTET_STRING,
    OPTIONAL,
    UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IconType, _decode_IconType, _encode_IconType } from "../RSPDefinitions/IconType.ta.mjs";
// export { IconType, IconType_jpg /* IMPORTED_LONG_NAMED_INTEGER */, jpg /* IMPORTED_SHORT_NAMED_INTEGER */, IconType_png /* IMPORTED_LONG_NAMED_INTEGER */, png /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_IconType, _encode_IconType } from "../RSPDefinitions/IconType.ta.mjs";
import { PprIds, _decode_PprIds, _encode_PprIds } from "../RSPDefinitions/PprIds.ta.mjs";
// export { PprIds, PprIds_pprUpdateControl /* IMPORTED_LONG_NAMED_BIT */, pprUpdateControl /* IMPORTED_SHORT_NAMED_BIT */, PprIds_ppr1 /* IMPORTED_LONG_NAMED_BIT */, ppr1 /* IMPORTED_SHORT_NAMED_BIT */, PprIds_ppr2 /* IMPORTED_LONG_NAMED_BIT */, ppr2 /* IMPORTED_SHORT_NAMED_BIT */, _decode_PprIds, _encode_PprIds } from "../RSPDefinitions/PprIds.ta.mjs";
import { VendorSpecificExtension, _decode_VendorSpecificExtension, _encode_VendorSpecificExtension } from "../RSPDefinitions/VendorSpecificExtension.ta.mjs";
// export { VendorSpecificExtension, _decode_VendorSpecificExtension, _encode_VendorSpecificExtension } from "../RSPDefinitions/VendorSpecificExtension.ta.mjs";


/**
 * @summary UpdateMetadataRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UpdateMetadataRequest ::= [42] SEQUENCE { -- Tag 'BF2A'
 *     serviceProviderName [17] UTF8String (SIZE(0..32)) OPTIONAL, -- Tag '91'
 *     profileName [18] UTF8String (SIZE(0..64)) OPTIONAL, -- Tag '92'
 *     iconType [19] IconType OPTIONAL, -- Tag '93'
 *     icon [20] OCTET STRING (SIZE(0..1024)) OPTIONAL, -- Tag '94' 
 *     profilePolicyRules [25] PprIds OPTIONAL, -- Tag '99'
 *     serviceSpecificDataStoredInEuicc [34] VendorSpecificExtension OPTIONAL, -- Tag 'BF22'
 *     fallbackAllowed [103] BOOLEAN OPTIONAL -- Tag '9F67'
 * }
 * ```
 * 
 * @class
 */
export
class UpdateMetadataRequest {
    constructor (
        /**
         * @summary `serviceProviderName`.
         * @public
         * @readonly
         */
        readonly serviceProviderName: OPTIONAL<UTF8String>,
        /**
         * @summary `profileName`.
         * @public
         * @readonly
         */
        readonly profileName: OPTIONAL<UTF8String>,
        /**
         * @summary `iconType`.
         * @public
         * @readonly
         */
        readonly iconType: OPTIONAL<IconType>,
        /**
         * @summary `icon`.
         * @public
         * @readonly
         */
        readonly icon: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `profilePolicyRules`.
         * @public
         * @readonly
         */
        readonly profilePolicyRules: OPTIONAL<PprIds>,
        /**
         * @summary `serviceSpecificDataStoredInEuicc`.
         * @public
         * @readonly
         */
        readonly serviceSpecificDataStoredInEuicc: OPTIONAL<VendorSpecificExtension>,
        /**
         * @summary `fallbackAllowed`.
         * @public
         * @readonly
         */
        readonly fallbackAllowed: OPTIONAL<BOOLEAN>
    ) {}

    /**
     * @summary Restructures an object into a UpdateMetadataRequest
     * @description
     * 
     * This takes an `object` and converts it to a `UpdateMetadataRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UpdateMetadataRequest`.
     * @returns {UpdateMetadataRequest}
     */
    public static _from_object (_o: { [_K in keyof (UpdateMetadataRequest)]: (UpdateMetadataRequest)[_K] }): UpdateMetadataRequest {
        return new UpdateMetadataRequest(_o.serviceProviderName, _o.profileName, _o.iconType, _o.icon, _o.profilePolicyRules, _o.serviceSpecificDataStoredInEuicc, _o.fallbackAllowed);
    }


}

/**
 * @summary The Leading Root Component Types of UpdateMetadataRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UpdateMetadataRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("serviceProviderName", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("profileName", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("iconType", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("icon", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("profilePolicyRules", true, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("serviceSpecificDataStoredInEuicc", true, $.hasTag(_TagClass.context, 34)),
    new $.ComponentSpec("fallbackAllowed", true, $.hasTag(_TagClass.context, 103))
];

/**
 * @summary The Trailing Root Component Types of UpdateMetadataRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UpdateMetadataRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UpdateMetadataRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UpdateMetadataRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_UpdateMetadataRequest: $.ASN1Decoder<UpdateMetadataRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UpdateMetadataRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UpdateMetadataRequest (el: _Element): UpdateMetadataRequest {
    if (!_cached_decoder_for_UpdateMetadataRequest) { _cached_decoder_for_UpdateMetadataRequest = $._decode_implicit<UpdateMetadataRequest>(() => function (el: _Element): UpdateMetadataRequest {
    let serviceProviderName: OPTIONAL<UTF8String>;
    let profileName: OPTIONAL<UTF8String>;
    let iconType: OPTIONAL<IconType>;
    let icon: OPTIONAL<OCTET_STRING>;
    let profilePolicyRules: OPTIONAL<PprIds>;
    let serviceSpecificDataStoredInEuicc: OPTIONAL<VendorSpecificExtension>;
    let fallbackAllowed: OPTIONAL<BOOLEAN>;
    const callbacks: $.DecodingMap = {
        "serviceProviderName": (_el: _Element): void => { serviceProviderName = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "profileName": (_el: _Element): void => { profileName = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "iconType": (_el: _Element): void => { iconType = $._decode_implicit<IconType>(() => _decode_IconType)(_el); },
        "icon": (_el: _Element): void => { icon = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "profilePolicyRules": (_el: _Element): void => { profilePolicyRules = $._decode_implicit<PprIds>(() => _decode_PprIds)(_el); },
        "serviceSpecificDataStoredInEuicc": (_el: _Element): void => { serviceSpecificDataStoredInEuicc = $._decode_implicit<VendorSpecificExtension>(() => _decode_VendorSpecificExtension)(_el); },
        "fallbackAllowed": (_el: _Element): void => { fallbackAllowed = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_UpdateMetadataRequest,
        _extension_additions_list_spec_for_UpdateMetadataRequest,
        _root_component_type_list_2_spec_for_UpdateMetadataRequest,
        undefined,
    );
    return new UpdateMetadataRequest(
        serviceProviderName,
        profileName,
        iconType,
        icon,
        profilePolicyRules,
        serviceSpecificDataStoredInEuicc,
        fallbackAllowed
    );
}); }
    return _cached_decoder_for_UpdateMetadataRequest(el);
}

let _cached_encoder_for_UpdateMetadataRequest: $.ASN1Encoder<UpdateMetadataRequest> | null = null;

/**
 * @summary Encodes a(n) UpdateMetadataRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UpdateMetadataRequest, encoded as an ASN.1 Element.
 */
export
function _encode_UpdateMetadataRequest (value: UpdateMetadataRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UpdateMetadataRequest) { _cached_encoder_for_UpdateMetadataRequest = $._encode_implicit(_TagClass.context, 42, () => function (value: UpdateMetadataRequest, elGetter: $.ASN1Encoder<UpdateMetadataRequest>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.serviceProviderName === undefined) ? undefined : $._encode_implicit(_TagClass.context, 17, () => $._encodeUTF8String, $.BER)(value.serviceProviderName, $.BER)),
            /* IF_ABSENT  */ ((value.profileName === undefined) ? undefined : $._encode_implicit(_TagClass.context, 18, () => $._encodeUTF8String, $.BER)(value.profileName, $.BER)),
            /* IF_ABSENT  */ ((value.iconType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 19, () => _encode_IconType, $.BER)(value.iconType, $.BER)),
            /* IF_ABSENT  */ ((value.icon === undefined) ? undefined : $._encode_implicit(_TagClass.context, 20, () => $._encodeOctetString, $.BER)(value.icon, $.BER)),
            /* IF_ABSENT  */ ((value.profilePolicyRules === undefined) ? undefined : $._encode_implicit(_TagClass.context, 25, () => _encode_PprIds, $.BER)(value.profilePolicyRules, $.BER)),
            /* IF_ABSENT  */ ((value.serviceSpecificDataStoredInEuicc === undefined) ? undefined : $._encode_implicit(_TagClass.context, 34, () => _encode_VendorSpecificExtension, $.BER)(value.serviceSpecificDataStoredInEuicc, $.BER)),
            /* IF_ABSENT  */ ((value.fallbackAllowed === undefined) ? undefined : $._encode_implicit(_TagClass.context, 103, () => $._encodeBoolean, $.BER)(value.fallbackAllowed, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_UpdateMetadataRequest(value, elGetter);
}


/* eslint-enable */
