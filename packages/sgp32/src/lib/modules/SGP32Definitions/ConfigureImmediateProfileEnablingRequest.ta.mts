/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    NULL,
    OBJECT_IDENTIFIER,
    OPTIONAL,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ConfigureImmediateProfileEnablingRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConfigureImmediateProfileEnablingRequest ::= [89] SEQUENCE { -- Tag 'BF59'
 *     immediateEnableFlag [0] NULL OPTIONAL,
 *     defaultSmdpOid [1] OBJECT IDENTIFIER OPTIONAL,
 *     defaultSmdpAddress [2] UTF8String OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ConfigureImmediateProfileEnablingRequest {
    constructor (
        /**
         * @summary `immediateEnableFlag`.
         * @public
         * @readonly
         */
        readonly immediateEnableFlag: OPTIONAL<NULL>,
        /**
         * @summary `defaultSmdpOid`.
         * @public
         * @readonly
         */
        readonly defaultSmdpOid: OPTIONAL<OBJECT_IDENTIFIER>,
        /**
         * @summary `defaultSmdpAddress`.
         * @public
         * @readonly
         */
        readonly defaultSmdpAddress: OPTIONAL<UTF8String>
    ) {}

    /**
     * @summary Restructures an object into a ConfigureImmediateProfileEnablingRequest
     * @description
     * 
     * This takes an `object` and converts it to a `ConfigureImmediateProfileEnablingRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ConfigureImmediateProfileEnablingRequest`.
     * @returns {ConfigureImmediateProfileEnablingRequest}
     */
    public static _from_object (_o: { [_K in keyof (ConfigureImmediateProfileEnablingRequest)]: (ConfigureImmediateProfileEnablingRequest)[_K] }): ConfigureImmediateProfileEnablingRequest {
        return new ConfigureImmediateProfileEnablingRequest(_o.immediateEnableFlag, _o.defaultSmdpOid, _o.defaultSmdpAddress);
    }


}

/**
 * @summary The Leading Root Component Types of ConfigureImmediateProfileEnablingRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ConfigureImmediateProfileEnablingRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("immediateEnableFlag", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("defaultSmdpOid", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("defaultSmdpAddress", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ConfigureImmediateProfileEnablingRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ConfigureImmediateProfileEnablingRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ConfigureImmediateProfileEnablingRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ConfigureImmediateProfileEnablingRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ConfigureImmediateProfileEnablingRequest: $.ASN1Decoder<ConfigureImmediateProfileEnablingRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConfigureImmediateProfileEnablingRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConfigureImmediateProfileEnablingRequest (el: _Element): ConfigureImmediateProfileEnablingRequest {
    if (!_cached_decoder_for_ConfigureImmediateProfileEnablingRequest) { _cached_decoder_for_ConfigureImmediateProfileEnablingRequest = $._decode_implicit<ConfigureImmediateProfileEnablingRequest>(() => function (el: _Element): ConfigureImmediateProfileEnablingRequest {
    let immediateEnableFlag: OPTIONAL<NULL>;
    let defaultSmdpOid: OPTIONAL<OBJECT_IDENTIFIER>;
    let defaultSmdpAddress: OPTIONAL<UTF8String>;
    const callbacks: $.DecodingMap = {
        "immediateEnableFlag": (_el: _Element): void => { immediateEnableFlag = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "defaultSmdpOid": (_el: _Element): void => { defaultSmdpOid = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "defaultSmdpAddress": (_el: _Element): void => { defaultSmdpAddress = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ConfigureImmediateProfileEnablingRequest,
        _extension_additions_list_spec_for_ConfigureImmediateProfileEnablingRequest,
        _root_component_type_list_2_spec_for_ConfigureImmediateProfileEnablingRequest,
        undefined,
    );
    return new ConfigureImmediateProfileEnablingRequest(
        immediateEnableFlag,
        defaultSmdpOid,
        defaultSmdpAddress
    );
}); }
    return _cached_decoder_for_ConfigureImmediateProfileEnablingRequest(el);
}

let _cached_encoder_for_ConfigureImmediateProfileEnablingRequest: $.ASN1Encoder<ConfigureImmediateProfileEnablingRequest> | null = null;

/**
 * @summary Encodes a(n) ConfigureImmediateProfileEnablingRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConfigureImmediateProfileEnablingRequest, encoded as an ASN.1 Element.
 */
export
function _encode_ConfigureImmediateProfileEnablingRequest (value: ConfigureImmediateProfileEnablingRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConfigureImmediateProfileEnablingRequest) { _cached_encoder_for_ConfigureImmediateProfileEnablingRequest = $._encode_implicit(_TagClass.context, 89, () => function (value: ConfigureImmediateProfileEnablingRequest, elGetter: $.ASN1Encoder<ConfigureImmediateProfileEnablingRequest>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.immediateEnableFlag === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER)(value.immediateEnableFlag, $.BER)),
            /* IF_ABSENT  */ ((value.defaultSmdpOid === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeObjectIdentifier, $.BER)(value.defaultSmdpOid, $.BER)),
            /* IF_ABSENT  */ ((value.defaultSmdpAddress === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeUTF8String, $.BER)(value.defaultSmdpAddress, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_ConfigureImmediateProfileEnablingRequest(value, elGetter);
}


/* eslint-enable */
