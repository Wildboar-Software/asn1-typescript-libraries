/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DRNType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DRNType ::= SEQUENCE{
 *          userId           [1] IMPLICIT OCTET STRING OPTIONAL,
 *          salt             [2] IMPLICIT OCTET STRING OPTIONAL,
 *          randomNumber     [3] IMPLICIT OCTET STRING}
 * ```
 * 
 * @class
 */
export
class DRNType {
    constructor (
        /**
         * @summary `userId`.
         * @public
         * @readonly
         */
        readonly userId: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `salt`.
         * @public
         * @readonly
         */
        readonly salt: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `randomNumber`.
         * @public
         * @readonly
         */
        readonly randomNumber: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a DRNType
     * @description
     * 
     * This takes an `object` and converts it to a `DRNType`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DRNType`.
     * @returns {DRNType}
     */
    public static _from_object (_o: { [_K in keyof (DRNType)]: (DRNType)[_K] }): DRNType {
        return new DRNType(_o.userId, _o.salt, _o.randomNumber);
    }


}

/**
 * @summary The Leading Root Component Types of DRNType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DRNType: $.ComponentSpec[] = [
    new $.ComponentSpec("userId", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("salt", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("randomNumber", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of DRNType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DRNType: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DRNType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DRNType: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DRNType: $.ASN1Decoder<DRNType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DRNType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DRNType (el: _Element): DRNType {
    if (!_cached_decoder_for_DRNType) { _cached_decoder_for_DRNType = function (el: _Element): DRNType {
    let userId: OPTIONAL<OCTET_STRING>;
    let salt: OPTIONAL<OCTET_STRING>;
    let randomNumber!: OCTET_STRING;
    const callbacks: $.DecodingMap = {
        "userId": (_el: _Element): void => { userId = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "salt": (_el: _Element): void => { salt = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "randomNumber": (_el: _Element): void => { randomNumber = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DRNType,
        _extension_additions_list_spec_for_DRNType,
        _root_component_type_list_2_spec_for_DRNType,
        undefined,
    );
    return new DRNType(
        userId,
        salt,
        randomNumber
    );
}; }
    return _cached_decoder_for_DRNType(el);
}

let _cached_encoder_for_DRNType: $.ASN1Encoder<DRNType> | null = null;

/**
 * @summary Encodes a(n) DRNType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DRNType, encoded as an ASN.1 Element.
 */
export
function _encode_DRNType (value: DRNType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DRNType) { _cached_encoder_for_DRNType = function (value: DRNType, elGetter: $.ASN1Encoder<DRNType>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.userId === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.userId, $.BER)),
            /* IF_ABSENT  */ ((value.salt === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.salt, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.randomNumber, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DRNType(value, elGetter);
}


/* eslint-enable */
