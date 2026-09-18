/* eslint-disable */
import {
    INTEGER,
    REAL,
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



/**
 * @summary LevelAndPolicy
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LevelAndPolicy ::= SEQUENCE {
 *     minNumAttempt   INTEGER,
 *     maxNumAttempt   INTEGER,
 *     maxDurPermitted REAL
 * }
 * ```
 * 
 * @class
 */
export
class LevelAndPolicy {
    constructor (
        /**
         * @summary `minNumAttempt`.
         * @public
         * @readonly
         */
        readonly minNumAttempt: INTEGER,
        /**
         * @summary `maxNumAttempt`.
         * @public
         * @readonly
         */
        readonly maxNumAttempt: INTEGER,
        /**
         * @summary `maxDurPermitted`.
         * @public
         * @readonly
         */
        readonly maxDurPermitted: REAL
    ) {}

    /**
     * @summary Restructures an object into a LevelAndPolicy
     * @description
     * 
     * This takes an `object` and converts it to a `LevelAndPolicy`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LevelAndPolicy`.
     * @returns {LevelAndPolicy}
     */
    public static _from_object (_o: { [_K in keyof (LevelAndPolicy)]: (LevelAndPolicy)[_K] }): LevelAndPolicy {
        return new LevelAndPolicy(_o.minNumAttempt, _o.maxNumAttempt, _o.maxDurPermitted);
    }


}

/**
 * @summary The Leading Root Component Types of LevelAndPolicy
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LevelAndPolicy: $.ComponentSpec[] = [
    new $.ComponentSpec("minNumAttempt", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("maxNumAttempt", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("maxDurPermitted", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of LevelAndPolicy
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LevelAndPolicy: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LevelAndPolicy
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LevelAndPolicy: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LevelAndPolicy: $.ASN1Decoder<LevelAndPolicy> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LevelAndPolicy
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LevelAndPolicy (el: _Element): LevelAndPolicy {
    if (!_cached_decoder_for_LevelAndPolicy) { _cached_decoder_for_LevelAndPolicy = function (el: _Element): LevelAndPolicy {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("LevelAndPolicy contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "minNumAttempt";
    sequence[1].name = "maxNumAttempt";
    sequence[2].name = "maxDurPermitted";
    let minNumAttempt!: INTEGER;
    let maxNumAttempt!: INTEGER;
    let maxDurPermitted!: REAL;
    minNumAttempt = $._decodeInteger(sequence[0]);
    maxNumAttempt = $._decodeInteger(sequence[1]);
    maxDurPermitted = $._decodeReal(sequence[2]);
    return new LevelAndPolicy(
        minNumAttempt,
        maxNumAttempt,
        maxDurPermitted,

    );
}; }
    return _cached_decoder_for_LevelAndPolicy(el);
}

let _cached_encoder_for_LevelAndPolicy: $.ASN1Encoder<LevelAndPolicy> | null = null;

/**
 * @summary Encodes a(n) LevelAndPolicy into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LevelAndPolicy, encoded as an ASN.1 Element.
 */
export
function _encode_LevelAndPolicy (value: LevelAndPolicy, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LevelAndPolicy) { _cached_encoder_for_LevelAndPolicy = function (value: LevelAndPolicy): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.minNumAttempt, $.BER),
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.maxNumAttempt, $.BER),
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeReal, $.BER)(value.maxDurPermitted, $.BER),
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_LevelAndPolicy(value, elGetter);
}


/* eslint-enable */
