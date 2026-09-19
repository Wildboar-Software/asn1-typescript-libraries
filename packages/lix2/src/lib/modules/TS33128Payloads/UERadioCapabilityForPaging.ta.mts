/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UERadioCapabilityForPaging
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UERadioCapabilityForPaging ::= SEQUENCE
 * {
 *     uERadioCapabilityForPagingOfNR    [1] OCTET STRING OPTIONAL,
 *     uERadioCapabilityForPagingOfEUTRA [2] OCTET STRING OPTIONAL,
 *     uERadioCapabilityForPagingOfNBIoT [3] OCTET STRING OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class UERadioCapabilityForPaging {
    constructor (
        /**
         * @summary `uERadioCapabilityForPagingOfNR`.
         * @public
         * @readonly
         */
        readonly uERadioCapabilityForPagingOfNR: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `uERadioCapabilityForPagingOfEUTRA`.
         * @public
         * @readonly
         */
        readonly uERadioCapabilityForPagingOfEUTRA: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `uERadioCapabilityForPagingOfNBIoT`.
         * @public
         * @readonly
         */
        readonly uERadioCapabilityForPagingOfNBIoT: OPTIONAL<OCTET_STRING>
    ) {}

    /**
     * @summary Restructures an object into a UERadioCapabilityForPaging
     * @description
     * 
     * This takes an `object` and converts it to a `UERadioCapabilityForPaging`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UERadioCapabilityForPaging`.
     * @returns {UERadioCapabilityForPaging}
     */
    public static _from_object (_o: { [_K in keyof (UERadioCapabilityForPaging)]: (UERadioCapabilityForPaging)[_K] }): UERadioCapabilityForPaging {
        return new UERadioCapabilityForPaging(_o.uERadioCapabilityForPagingOfNR, _o.uERadioCapabilityForPagingOfEUTRA, _o.uERadioCapabilityForPagingOfNBIoT);
    }


}

/**
 * @summary The Leading Root Component Types of UERadioCapabilityForPaging
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UERadioCapabilityForPaging: $.ComponentSpec[] = [
    new $.ComponentSpec("uERadioCapabilityForPagingOfNR", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("uERadioCapabilityForPagingOfEUTRA", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("uERadioCapabilityForPagingOfNBIoT", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of UERadioCapabilityForPaging
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UERadioCapabilityForPaging: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UERadioCapabilityForPaging
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UERadioCapabilityForPaging: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_UERadioCapabilityForPaging: $.ASN1Decoder<UERadioCapabilityForPaging> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UERadioCapabilityForPaging
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UERadioCapabilityForPaging (el: _Element): UERadioCapabilityForPaging {
    if (!_cached_decoder_for_UERadioCapabilityForPaging) { _cached_decoder_for_UERadioCapabilityForPaging = function (el: _Element): UERadioCapabilityForPaging {
    let uERadioCapabilityForPagingOfNR: OPTIONAL<OCTET_STRING>;
    let uERadioCapabilityForPagingOfEUTRA: OPTIONAL<OCTET_STRING>;
    let uERadioCapabilityForPagingOfNBIoT: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "uERadioCapabilityForPagingOfNR": (_el: _Element): void => { uERadioCapabilityForPagingOfNR = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "uERadioCapabilityForPagingOfEUTRA": (_el: _Element): void => { uERadioCapabilityForPagingOfEUTRA = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "uERadioCapabilityForPagingOfNBIoT": (_el: _Element): void => { uERadioCapabilityForPagingOfNBIoT = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_UERadioCapabilityForPaging,
        _extension_additions_list_spec_for_UERadioCapabilityForPaging,
        _root_component_type_list_2_spec_for_UERadioCapabilityForPaging,
        undefined,
    );
    return new UERadioCapabilityForPaging(
        uERadioCapabilityForPagingOfNR,
        uERadioCapabilityForPagingOfEUTRA,
        uERadioCapabilityForPagingOfNBIoT
    );
}; }
    return _cached_decoder_for_UERadioCapabilityForPaging(el);
}

let _cached_encoder_for_UERadioCapabilityForPaging: $.ASN1Encoder<UERadioCapabilityForPaging> | null = null;

/**
 * @summary Encodes a(n) UERadioCapabilityForPaging into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UERadioCapabilityForPaging, encoded as an ASN.1 Element.
 */
export
function _encode_UERadioCapabilityForPaging (value: UERadioCapabilityForPaging, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UERadioCapabilityForPaging) { _cached_encoder_for_UERadioCapabilityForPaging = function (value: UERadioCapabilityForPaging, elGetter: $.ASN1Encoder<UERadioCapabilityForPaging>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.uERadioCapabilityForPagingOfNR === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.uERadioCapabilityForPagingOfNR, $.BER)),
            /* IF_ABSENT  */ ((value.uERadioCapabilityForPagingOfEUTRA === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.uERadioCapabilityForPagingOfEUTRA, $.BER)),
            /* IF_ABSENT  */ ((value.uERadioCapabilityForPagingOfNBIoT === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.uERadioCapabilityForPagingOfNBIoT, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_UERadioCapabilityForPaging(value, elGetter);
}


/* eslint-enable */
