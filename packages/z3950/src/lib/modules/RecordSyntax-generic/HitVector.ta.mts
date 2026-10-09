/* eslint-disable */
import {
    INTEGER,
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Term, _decode_Term, _encode_Term } from "../Z39-50-APDU-2001/Term.ta.mjs";
import { IntUnit, _decode_IntUnit, _encode_IntUnit } from "../Z39-50-APDU-2001/IntUnit.ta.mjs";


/**
 * @summary HitVector
 * @description
 * 
 * One satisfying fragment inside an element (ANSI/NISO Z39.50-2003,
 * RET.3.2.3.1, ASN1.6). The server may return part of the element and point at
 * fragments it left out, so the client can ask for those next. Variant-1
 * highlighting (class 8) is an alternative (RET.3.3.1.8).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HitVector ::= SEQUENCE {
 *     -- Each hit vector points to a fragment within the element, via location and/or token.
 *     satisfier           Term OPTIONAL, -- sourceword, etc.
 *     offsetIntoElement   [1] IMPLICIT IntUnit OPTIONAL,
 *     length              [2] IMPLICIT IntUnit OPTIONAL,
 *     hitRank             [3] IMPLICIT INTEGER OPTIONAL,
 *     serverToken         [4] IMPLICIT OCTET STRING OPTIONAL
 *     -- Client may use token subsequently within a variantRequest
 *     -- (in an elementRequest) to retrieve (or to refer to) the fragment.
 * }
 * ```
 * 
 * @class
 */
export
class HitVector {
    /**
     * @summary `satisfier`.
     * @description
     * 
     * A term from the query that occurs in this fragment. Omit it when the
     * server is not naming that term (RET.3.2.3.1).
     * @public
     * @readonly
     */
    readonly satisfier: OPTIONAL<Term>;
    /**
     * @summary `offsetIntoElement`.
     * @description
     * 
     * Where the fragment starts, in a unit such as pages or bytes.
     * Variant-specific. Omit it on a non-variant-specific hit; that hit then
     * carries only a token (RET.3.2.3.1).
     * @public
     * @readonly
     */
    readonly offsetIntoElement: OPTIONAL<IntUnit>;
    /**
     * @summary `length`.
     * @description
     * 
     * Length of the fragment, in the same kind of unit as the offset.
     * Variant-specific. Ranking several hits on one page requires a finer unit
     * than a page (RET.3.2.3.1).
     * @public
     * @readonly
     */
    readonly length: OPTIONAL<IntUnit>;
    /**
     * @summary `hitRank`.
     * @description
     * 
     * Rank among the hit vectors for this element. A positive integer no larger
     * than the number of those vectors. More than one hit may share a rank
     * (RET.3.2.3.1).
     * @public
     * @readonly
     */
    readonly hitRank: OPTIONAL<INTEGER>;
    /**
     * @summary `serverToken`.
     * @description
     * 
     * Identifier for this fragment. During the same Z-association the client
     * may send it in a variant request (variant-1 class 5, type 7) to retrieve
     * or refer to the fragment (ASN1.6, RET.3.2.3.1). A token may be
     * variant-specific or not. Location and a token may both be present.
     * @public
     * @readonly
     */
    readonly serverToken: OPTIONAL<OCTET_STRING>;

    constructor (
        satisfier: OPTIONAL<Term>,
        offsetIntoElement: OPTIONAL<IntUnit>,
        length: OPTIONAL<IntUnit>,
        hitRank: OPTIONAL<INTEGER>,
        serverToken: OPTIONAL<OCTET_STRING>
    ) {
        this.satisfier = satisfier;
        this.offsetIntoElement = offsetIntoElement;
        this.length = length;
        this.hitRank = hitRank;
        this.serverToken = serverToken;
    }

    /**
     * @summary Restructures an object into a HitVector
     * @description
     * 
     * This takes an `object` and converts it to a `HitVector`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `HitVector`.
     * @returns {HitVector}
     */
    public static _from_object (_o: { [_K in keyof (HitVector)]: (HitVector)[_K] }): HitVector {
        return new HitVector(_o.satisfier, _o.offsetIntoElement, _o.length, _o.hitRank, _o.serverToken);
    }


}

/**
 * @summary The Leading Root Component Types of HitVector
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_HitVector: $.ComponentSpec[] = [
    new $.ComponentSpec("satisfier", true, $.or($.hasTag(_TagClass.context, 45), $.hasTag(_TagClass.context, 215), $.hasTag(_TagClass.context, 216), $.hasTag(_TagClass.context, 217), $.hasTag(_TagClass.context, 218), $.hasTag(_TagClass.context, 219), $.hasTag(_TagClass.context, 220), $.hasTag(_TagClass.context, 221))),
    new $.ComponentSpec("offsetIntoElement", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("length", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("hitRank", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("serverToken", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of HitVector
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_HitVector: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of HitVector
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_HitVector: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_HitVector: $.ASN1Decoder<HitVector> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HitVector
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_HitVector (el: _Element): HitVector {
    if (!_cached_decoder_for_HitVector) { _cached_decoder_for_HitVector = function (el: _Element): HitVector {
    let satisfier: OPTIONAL<Term>;
    let offsetIntoElement: OPTIONAL<IntUnit>;
    let length: OPTIONAL<IntUnit>;
    let hitRank: OPTIONAL<INTEGER>;
    let serverToken: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "satisfier": (_el: _Element): void => { satisfier = _decode_Term(_el); },
        "offsetIntoElement": (_el: _Element): void => { offsetIntoElement = $._decode_implicit<IntUnit>(() => _decode_IntUnit)(_el); },
        "length": (_el: _Element): void => { length = $._decode_implicit<IntUnit>(() => _decode_IntUnit)(_el); },
        "hitRank": (_el: _Element): void => { hitRank = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "serverToken": (_el: _Element): void => { serverToken = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_HitVector,
        _extension_additions_list_spec_for_HitVector,
        _root_component_type_list_2_spec_for_HitVector,
        undefined,
    );
    return new HitVector(
        satisfier,
        offsetIntoElement,
        length,
        hitRank,
        serverToken
    );
}; }
    return _cached_decoder_for_HitVector(el);
}

let _cached_encoder_for_HitVector: $.ASN1Encoder<HitVector> | null = null;

/**
 * @summary Encodes a(n) HitVector into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HitVector, encoded as an ASN.1 Element.
 */
export
function _encode_HitVector (value: HitVector, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_HitVector) { _cached_encoder_for_HitVector = function (value: HitVector, elGetter: $.ASN1Encoder<HitVector>): _Element {
    const _components: _Element[] = new Array(5);
    let _components_i = 0;
    if (value.satisfier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ _encode_Term(value.satisfier, $.BER);
    }
    if (value.offsetIntoElement !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_IntUnit, $.BER)(value.offsetIntoElement, $.BER);
    }
    if (value.length !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_IntUnit, $.BER)(value.length, $.BER);
    }
    if (value.hitRank !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.hitRank, $.BER);
    }
    if (value.serverToken !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.serverToken, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_HitVector(value, elGetter);
}


/* eslint-enable */
