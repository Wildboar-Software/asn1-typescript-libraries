/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    VisibleString,
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
import { CorpusStatistics, _decode_CorpusStatistics, _encode_CorpusStatistics } from "../MachineReadableBiometricTestingAndReportingTestReport/CorpusStatistics.ta.mjs";


/**
 * @summary CorpusComposition
 * @description
 *
 * Identity and statistics of the evaluation corpus (Clause 6.4.4.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CorpusComposition ::= SEQUENCE {
 *     identifier          OBJECT IDENTIFIER,
 *     nameCorpus          VisibleString,
 *     corpusStatistics    CorpusStatistics
 * }
 * ```
 * 
 * @class
 */
export
class CorpusComposition {
    constructor (
        /**
         * @summary `identifier`.
         * @description
         *
         * OID identifying the corpus. Annex C.2 Table C.1 allows an
         * owner-assigned or independently registered OID.
         *
         * @public
         * @readonly
         */
        readonly identifier: OBJECT_IDENTIFIER,
        /**
         * @summary `nameCorpus`.
         * @description
         *
         * Name of the corpus (Clause 6.4.4.2).
         *
         * @public
         * @readonly
         */
        readonly nameCorpus: VisibleString,
        /**
         * @summary `corpusStatistics`.
         * @description
         *
         * Counts, per-subject sample tables, and related statistics
         * (Clause 6.4.4.2).
         *
         * @public
         * @readonly
         */
        readonly corpusStatistics: CorpusStatistics
    ) {}

    /**
     * @summary Restructures an object into a CorpusComposition
     * @description
     * 
     * This takes an `object` and converts it to a `CorpusComposition`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CorpusComposition`.
     * @returns {CorpusComposition}
     */
    public static _from_object (_o: { [_K in keyof (CorpusComposition)]: (CorpusComposition)[_K] }): CorpusComposition {
        return new CorpusComposition(_o.identifier, _o.nameCorpus, _o.corpusStatistics);
    }


}

/**
 * @summary The Leading Root Component Types of CorpusComposition
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CorpusComposition: $.ComponentSpec[] = [
    new $.ComponentSpec("identifier", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("nameCorpus", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("corpusStatistics", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of CorpusComposition
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CorpusComposition: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CorpusComposition
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CorpusComposition: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CorpusComposition: $.ASN1Decoder<CorpusComposition> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CorpusComposition
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CorpusComposition (el: _Element): CorpusComposition {
    if (!_cached_decoder_for_CorpusComposition) { _cached_decoder_for_CorpusComposition = function (el: _Element): CorpusComposition {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("CorpusComposition contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "identifier";
    sequence[1].name = "nameCorpus";
    sequence[2].name = "corpusStatistics";
    let identifier!: OBJECT_IDENTIFIER;
    let nameCorpus!: VisibleString;
    let corpusStatistics!: CorpusStatistics;
    identifier = $._decodeObjectIdentifier(sequence[0]);
    nameCorpus = $._decodeVisibleString(sequence[1]);
    corpusStatistics = _decode_CorpusStatistics(sequence[2]);
    return new CorpusComposition(
        identifier,
        nameCorpus,
        corpusStatistics,

    );
}; }
    return _cached_decoder_for_CorpusComposition(el);
}

let _cached_encoder_for_CorpusComposition: $.ASN1Encoder<CorpusComposition> | null = null;

/**
 * @summary Encodes a(n) CorpusComposition into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CorpusComposition, encoded as an ASN.1 Element.
 */
export
function _encode_CorpusComposition (value: CorpusComposition, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CorpusComposition) { _cached_encoder_for_CorpusComposition = function (value: CorpusComposition): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeObjectIdentifier, $.BER)(value.identifier, $.BER),
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeVisibleString, $.BER)(value.nameCorpus, $.BER),
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 2, () => _encode_CorpusStatistics, $.BER)(value.corpusStatistics, $.BER),
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CorpusComposition(value, elGetter);
}


/* eslint-enable */
