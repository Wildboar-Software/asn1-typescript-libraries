/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    VisibleString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GetElementRequestPdu
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetElementRequestPdu ::= SEQUENCE {
 *     ident        [0] IMPLICIT VisibleString, -- size shall support up to 65 octets
 *     references    [1] IMPLICIT SEQUENCE OF VisibleString,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class GetElementRequestPdu {
    constructor (
        /**
         * @summary `ident`.
         * @public
         * @readonly
         */
        readonly ident: VisibleString,
        /**
         * @summary `references`.
         * @public
         * @readonly
         */
        readonly references: VisibleString[],
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a GetElementRequestPdu
     * @description
     * 
     * This takes an `object` and converts it to a `GetElementRequestPdu`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetElementRequestPdu`.
     * @returns {GetElementRequestPdu}
     */
    public static _from_object (_o: { [_K in keyof (GetElementRequestPdu)]: (GetElementRequestPdu)[_K] }): GetElementRequestPdu {
        return new GetElementRequestPdu(_o.ident, _o.references, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of GetElementRequestPdu
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetElementRequestPdu: $.ComponentSpec[] = [
    new $.ComponentSpec("ident", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("references", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of GetElementRequestPdu
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetElementRequestPdu: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetElementRequestPdu
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetElementRequestPdu: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetElementRequestPdu: $.ASN1Decoder<GetElementRequestPdu> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetElementRequestPdu
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetElementRequestPdu (el: _Element): GetElementRequestPdu {
    if (!_cached_decoder_for_GetElementRequestPdu) { _cached_decoder_for_GetElementRequestPdu = function (el: _Element): GetElementRequestPdu {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("GetElementRequestPdu contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "ident";
    sequence[1].name = "references";
    let ident!: VisibleString;
    let references!: VisibleString[];
    ident = $._decode_implicit<VisibleString>(() => $._decodeVisibleString)(sequence[0]);
    references = $._decode_implicit<VisibleString[]>(() => $._decodeSequenceOf<VisibleString>(() => $._decodeVisibleString))(sequence[1]);
    return new GetElementRequestPdu(
        ident,
        references,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_GetElementRequestPdu(el);
}

let _cached_encoder_for_GetElementRequestPdu: $.ASN1Encoder<GetElementRequestPdu> | null = null;

/**
 * @summary Encodes a(n) GetElementRequestPdu into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetElementRequestPdu, encoded as an ASN.1 Element.
 */
export
function _encode_GetElementRequestPdu (value: GetElementRequestPdu, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetElementRequestPdu) { _cached_encoder_for_GetElementRequestPdu = function (value: GetElementRequestPdu, elGetter: $.ASN1Encoder<GetElementRequestPdu>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeVisibleString, $.BER)(value.ident, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<VisibleString>(() => $._encodeVisibleString, $.BER), $.BER)(value.references, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetElementRequestPdu(value, elGetter);
}


/* eslint-enable */
