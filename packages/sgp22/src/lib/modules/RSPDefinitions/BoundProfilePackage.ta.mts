/* eslint-disable */
import {
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InitialiseSecureChannelRequest, _decode_InitialiseSecureChannelRequest, _encode_InitialiseSecureChannelRequest } from "../RSPDefinitions/InitialiseSecureChannelRequest.ta.mjs";
// export { InitialiseSecureChannelRequest, _decode_InitialiseSecureChannelRequest, _encode_InitialiseSecureChannelRequest } from "../RSPDefinitions/InitialiseSecureChannelRequest.ta.mjs";


/**
 * @summary BoundProfilePackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BoundProfilePackage ::= [54] SEQUENCE { -- Tag 'BF36'
 *     initialiseSecureChannelRequest [35] InitialiseSecureChannelRequest, -- Tag 'BF23'
 *     firstSequenceOf87 [0] SEQUENCE OF [7] OCTET STRING, -- sequence of '87' TLVs
 *     sequenceOf88 [1] SEQUENCE OF [8] OCTET STRING, -- sequence of '88' TLVs
 *     secondSequenceOf87 [2] SEQUENCE OF [7] OCTET STRING OPTIONAL, -- sequence of '87' TLVs
 *     sequenceOf86 [3] SEQUENCE OF [6] OCTET STRING -- sequence of '86' TLVs
 * }
 * ```
 * 
 * @class
 */
export
class BoundProfilePackage {
    constructor (
        /**
         * @summary `initialiseSecureChannelRequest`.
         * @public
         * @readonly
         */
        readonly initialiseSecureChannelRequest: InitialiseSecureChannelRequest,
        /**
         * @summary `firstSequenceOf87`.
         * @public
         * @readonly
         */
        readonly firstSequenceOf87: OCTET_STRING[],
        /**
         * @summary `sequenceOf88`.
         * @public
         * @readonly
         */
        readonly sequenceOf88: OCTET_STRING[],
        /**
         * @summary `secondSequenceOf87`.
         * @public
         * @readonly
         */
        readonly secondSequenceOf87: OPTIONAL<OCTET_STRING[]>,
        /**
         * @summary `sequenceOf86`.
         * @public
         * @readonly
         */
        readonly sequenceOf86: OCTET_STRING[]
    ) {}

    /**
     * @summary Restructures an object into a BoundProfilePackage
     * @description
     * 
     * This takes an `object` and converts it to a `BoundProfilePackage`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BoundProfilePackage`.
     * @returns {BoundProfilePackage}
     */
    public static _from_object (_o: { [_K in keyof (BoundProfilePackage)]: (BoundProfilePackage)[_K] }): BoundProfilePackage {
        return new BoundProfilePackage(_o.initialiseSecureChannelRequest, _o.firstSequenceOf87, _o.sequenceOf88, _o.secondSequenceOf87, _o.sequenceOf86);
    }


}

/**
 * @summary The Leading Root Component Types of BoundProfilePackage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_BoundProfilePackage: $.ComponentSpec[] = [
    new $.ComponentSpec("initialiseSecureChannelRequest", false, $.hasTag(_TagClass.context, 35)),
    new $.ComponentSpec("firstSequenceOf87", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("sequenceOf88", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("secondSequenceOf87", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("sequenceOf86", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of BoundProfilePackage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_BoundProfilePackage: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of BoundProfilePackage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_BoundProfilePackage: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_BoundProfilePackage: $.ASN1Decoder<BoundProfilePackage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BoundProfilePackage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BoundProfilePackage (el: _Element): BoundProfilePackage {
    if (!_cached_decoder_for_BoundProfilePackage) { _cached_decoder_for_BoundProfilePackage = $._decode_implicit<BoundProfilePackage>(() => function (el: _Element): BoundProfilePackage {
    let initialiseSecureChannelRequest!: InitialiseSecureChannelRequest;
    let firstSequenceOf87!: OCTET_STRING[];
    let sequenceOf88!: OCTET_STRING[];
    let secondSequenceOf87: OPTIONAL<OCTET_STRING[]>;
    let sequenceOf86!: OCTET_STRING[];
    const callbacks: $.DecodingMap = {
        "initialiseSecureChannelRequest": (_el: _Element): void => { initialiseSecureChannelRequest = $._decode_implicit<InitialiseSecureChannelRequest>(() => _decode_InitialiseSecureChannelRequest)(_el); },
        "firstSequenceOf87": (_el: _Element): void => { firstSequenceOf87 = $._decode_implicit<OCTET_STRING[]>(() => $._decodeSequenceOf<OCTET_STRING>(() => $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)))(_el); },
        "sequenceOf88": (_el: _Element): void => { sequenceOf88 = $._decode_implicit<OCTET_STRING[]>(() => $._decodeSequenceOf<OCTET_STRING>(() => $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)))(_el); },
        "secondSequenceOf87": (_el: _Element): void => { secondSequenceOf87 = $._decode_implicit<OCTET_STRING[]>(() => $._decodeSequenceOf<OCTET_STRING>(() => $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)))(_el); },
        "sequenceOf86": (_el: _Element): void => { sequenceOf86 = $._decode_implicit<OCTET_STRING[]>(() => $._decodeSequenceOf<OCTET_STRING>(() => $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_BoundProfilePackage,
        _extension_additions_list_spec_for_BoundProfilePackage,
        _root_component_type_list_2_spec_for_BoundProfilePackage,
        undefined,
    );
    return new BoundProfilePackage(
        initialiseSecureChannelRequest,
        firstSequenceOf87,
        sequenceOf88,
        secondSequenceOf87,
        sequenceOf86
    );
}); }
    return _cached_decoder_for_BoundProfilePackage(el);
}

let _cached_encoder_for_BoundProfilePackage: $.ASN1Encoder<BoundProfilePackage> | null = null;

/**
 * @summary Encodes a(n) BoundProfilePackage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BoundProfilePackage, encoded as an ASN.1 Element.
 */
export
function _encode_BoundProfilePackage (value: BoundProfilePackage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BoundProfilePackage) { _cached_encoder_for_BoundProfilePackage = $._encode_implicit(_TagClass.context, 54, () => function (value: BoundProfilePackage, elGetter: $.ASN1Encoder<BoundProfilePackage>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 35, () => _encode_InitialiseSecureChannelRequest, $.BER)(value.initialiseSecureChannelRequest, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeSequenceOf<OCTET_STRING>(() => $._encode_implicit(_TagClass.context, 7, () => $._encodeOctetString, $.BER), $.BER), $.BER)(value.firstSequenceOf87, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<OCTET_STRING>(() => $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER), $.BER), $.BER)(value.sequenceOf88, $.BER),
            /* IF_ABSENT  */ ((value.secondSequenceOf87 === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<OCTET_STRING>(() => $._encode_implicit(_TagClass.context, 7, () => $._encodeOctetString, $.BER), $.BER), $.BER)(value.secondSequenceOf87, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<OCTET_STRING>(() => $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER), $.BER), $.BER)(value.sequenceOf86, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_BoundProfilePackage(value, elGetter);
}


/* eslint-enable */
