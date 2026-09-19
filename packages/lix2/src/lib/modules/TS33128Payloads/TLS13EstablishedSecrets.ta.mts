/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TLS13EstablishedSecrets
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TLS13EstablishedSecrets ::= SEQUENCE
 * {
 *     dHE           [1] OCTET STRING (SIZE(1..65535)) OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class TLS13EstablishedSecrets {
    constructor (
        /**
         * @summary `dHE`.
         * @public
         * @readonly
         */
        readonly dHE: OPTIONAL<OCTET_STRING>
    ) {}

    /**
     * @summary Restructures an object into a TLS13EstablishedSecrets
     * @description
     * 
     * This takes an `object` and converts it to a `TLS13EstablishedSecrets`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TLS13EstablishedSecrets`.
     * @returns {TLS13EstablishedSecrets}
     */
    public static _from_object (_o: { [_K in keyof (TLS13EstablishedSecrets)]: (TLS13EstablishedSecrets)[_K] }): TLS13EstablishedSecrets {
        return new TLS13EstablishedSecrets(_o.dHE);
    }


}

/**
 * @summary The Leading Root Component Types of TLS13EstablishedSecrets
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TLS13EstablishedSecrets: $.ComponentSpec[] = [
    new $.ComponentSpec("dHE", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of TLS13EstablishedSecrets
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TLS13EstablishedSecrets: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TLS13EstablishedSecrets
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TLS13EstablishedSecrets: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TLS13EstablishedSecrets: $.ASN1Decoder<TLS13EstablishedSecrets> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TLS13EstablishedSecrets
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TLS13EstablishedSecrets (el: _Element): TLS13EstablishedSecrets {
    if (!_cached_decoder_for_TLS13EstablishedSecrets) { _cached_decoder_for_TLS13EstablishedSecrets = function (el: _Element): TLS13EstablishedSecrets {
    let dHE: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "dHE": (_el: _Element): void => { dHE = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TLS13EstablishedSecrets,
        _extension_additions_list_spec_for_TLS13EstablishedSecrets,
        _root_component_type_list_2_spec_for_TLS13EstablishedSecrets,
        undefined,
    );
    return new TLS13EstablishedSecrets(
        dHE
    );
}; }
    return _cached_decoder_for_TLS13EstablishedSecrets(el);
}

let _cached_encoder_for_TLS13EstablishedSecrets: $.ASN1Encoder<TLS13EstablishedSecrets> | null = null;

/**
 * @summary Encodes a(n) TLS13EstablishedSecrets into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TLS13EstablishedSecrets, encoded as an ASN.1 Element.
 */
export
function _encode_TLS13EstablishedSecrets (value: TLS13EstablishedSecrets, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TLS13EstablishedSecrets) { _cached_encoder_for_TLS13EstablishedSecrets = function (value: TLS13EstablishedSecrets, elGetter: $.ASN1Encoder<TLS13EstablishedSecrets>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.dHE === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.dHE, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TLS13EstablishedSecrets(value, elGetter);
}


/* eslint-enable */
