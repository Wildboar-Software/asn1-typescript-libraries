/* eslint-disable */
import {
    INTEGER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Term, _decode_Term, _encode_Term } from "../Z39-50-APDU-2001/Term.ta.mjs";
// export { Term, _decode_Term, _encode_Term } from "../Z39-50-APDU-2001/Term.ta.mjs";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";
// export { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";
import { AttributeList, _decode_AttributeList, _encode_AttributeList } from "../Z39-50-APDU-2001/AttributeList.ta.mjs";
// export { AttributeList, _decode_AttributeList, _encode_AttributeList } from "../Z39-50-APDU-2001/AttributeList.ta.mjs";
import { AttributesPlusTerm, _decode_AttributesPlusTerm, _encode_AttributesPlusTerm } from "../Z39-50-APDU-2001/AttributesPlusTerm.ta.mjs";
// export { AttributesPlusTerm, _decode_AttributesPlusTerm, _encode_AttributesPlusTerm } from "../Z39-50-APDU-2001/AttributesPlusTerm.ta.mjs";
import { OccurrenceByAttributes, _decode_OccurrenceByAttributes, _encode_OccurrenceByAttributes } from "../Z39-50-APDU-2001/OccurrenceByAttributes.ta.mjs";
// export { OccurrenceByAttributes, _decode_OccurrenceByAttributes, _encode_OccurrenceByAttributes } from "../Z39-50-APDU-2001/OccurrenceByAttributes.ta.mjs";
import { OtherInformation, _decode_OtherInformation, _encode_OtherInformation } from "../Z39-50-APDU-2001/OtherInformation.ta.mjs";
// export { OtherInformation, _decode_OtherInformation, _encode_OtherInformation } from "../Z39-50-APDU-2001/OtherInformation.ta.mjs";


/**
 * @summary TermInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TermInfo ::= SEQUENCE {
 *     term                Term,
 *     displayTerm         [0] IMPLICIT InternationalString OPTIONAL,
 *     -- See comment 11
 *     suggestedAttributes AttributeList OPTIONAL,
 *     alternativeTerm     [4] IMPLICIT SEQUENCE OF AttributesPlusTerm OPTIONAL,
 *     globalOccurrences   [2] IMPLICIT INTEGER OPTIONAL,
 *     byAttributes        [3] IMPLICIT OccurrenceByAttributes OPTIONAL,
 *     otherTermInfo       OtherInformation OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class TermInfo {
    /**
     * @summary `term`.
     * @public
     * @readonly
     */
    readonly term: Term;
    /**
     * @summary `displayTerm`.
     * @public
     * @readonly
     */
    readonly displayTerm: OPTIONAL<InternationalString>;
    /**
     * @summary `suggestedAttributes`.
     * @public
     * @readonly
     */
    readonly suggestedAttributes: OPTIONAL<AttributeList>;
    /**
     * @summary `alternativeTerm`.
     * @public
     * @readonly
     */
    readonly alternativeTerm: OPTIONAL<AttributesPlusTerm[]>;
    /**
     * @summary `globalOccurrences`.
     * @public
     * @readonly
     */
    readonly globalOccurrences: OPTIONAL<INTEGER>;
    /**
     * @summary `byAttributes`.
     * @public
     * @readonly
     */
    readonly byAttributes: OPTIONAL<OccurrenceByAttributes>;
    /**
     * @summary `otherTermInfo`.
     * @public
     * @readonly
     */
    readonly otherTermInfo: OPTIONAL<OtherInformation>;

    constructor (
        term: Term,
        displayTerm: OPTIONAL<InternationalString>,
        suggestedAttributes: OPTIONAL<AttributeList>,
        alternativeTerm: OPTIONAL<AttributesPlusTerm[]>,
        globalOccurrences: OPTIONAL<INTEGER>,
        byAttributes: OPTIONAL<OccurrenceByAttributes>,
        otherTermInfo: OPTIONAL<OtherInformation>
    ) {
        this.term = term;
        this.displayTerm = displayTerm;
        this.suggestedAttributes = suggestedAttributes;
        this.alternativeTerm = alternativeTerm;
        this.globalOccurrences = globalOccurrences;
        this.byAttributes = byAttributes;
        this.otherTermInfo = otherTermInfo;
    }

    /**
     * @summary Restructures an object into a TermInfo
     * @description
     * 
     * This takes an `object` and converts it to a `TermInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TermInfo`.
     * @returns {TermInfo}
     */
    public static _from_object (_o: { [_K in keyof (TermInfo)]: (TermInfo)[_K] }): TermInfo {
        return new TermInfo(_o.term, _o.displayTerm, _o.suggestedAttributes, _o.alternativeTerm, _o.globalOccurrences, _o.byAttributes, _o.otherTermInfo);
    }


}

/**
 * @summary The Leading Root Component Types of TermInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TermInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("term", false, $.hasAnyTag),
    new $.ComponentSpec("displayTerm", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("suggestedAttributes", true, $.hasTag(_TagClass.context, 44)),
    new $.ComponentSpec("alternativeTerm", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("globalOccurrences", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("byAttributes", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("otherTermInfo", true, $.hasTag(_TagClass.context, 201))
];

/**
 * @summary The Trailing Root Component Types of TermInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TermInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TermInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TermInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TermInfo: $.ASN1Decoder<TermInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TermInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TermInfo (el: _Element): TermInfo {
    if (!_cached_decoder_for_TermInfo) { _cached_decoder_for_TermInfo = function (el: _Element): TermInfo {
    let term!: Term;
    let displayTerm: OPTIONAL<InternationalString>;
    let suggestedAttributes: OPTIONAL<AttributeList>;
    let alternativeTerm: OPTIONAL<AttributesPlusTerm[]>;
    let globalOccurrences: OPTIONAL<INTEGER>;
    let byAttributes: OPTIONAL<OccurrenceByAttributes>;
    let otherTermInfo: OPTIONAL<OtherInformation>;
    const callbacks: $.DecodingMap = {
        "term": (_el: _Element): void => { term = _decode_Term(_el); },
        "displayTerm": (_el: _Element): void => { displayTerm = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "suggestedAttributes": (_el: _Element): void => { suggestedAttributes = _decode_AttributeList(_el); },
        "alternativeTerm": (_el: _Element): void => { alternativeTerm = $._decode_implicit<AttributesPlusTerm[]>(() => $._decodeSequenceOf<AttributesPlusTerm>(() => _decode_AttributesPlusTerm))(_el); },
        "globalOccurrences": (_el: _Element): void => { globalOccurrences = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "byAttributes": (_el: _Element): void => { byAttributes = $._decode_implicit<OccurrenceByAttributes>(() => _decode_OccurrenceByAttributes)(_el); },
        "otherTermInfo": (_el: _Element): void => { otherTermInfo = _decode_OtherInformation(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TermInfo,
        _extension_additions_list_spec_for_TermInfo,
        _root_component_type_list_2_spec_for_TermInfo,
        undefined,
    );
    return new TermInfo(
        term,
        displayTerm,
        suggestedAttributes,
        alternativeTerm,
        globalOccurrences,
        byAttributes,
        otherTermInfo
    );
}; }
    return _cached_decoder_for_TermInfo(el);
}

let _cached_encoder_for_TermInfo: $.ASN1Encoder<TermInfo> | null = null;

/**
 * @summary Encodes a(n) TermInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TermInfo, encoded as an ASN.1 Element.
 */
export
function _encode_TermInfo (value: TermInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TermInfo) { _cached_encoder_for_TermInfo = function (value: TermInfo, elGetter: $.ASN1Encoder<TermInfo>): _Element {
    const _components: _Element[] = new Array(7);
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ _encode_Term(value.term, $.BER);
    if (value.displayTerm !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_InternationalString, $.BER)(value.displayTerm, $.BER);
    }
    if (value.suggestedAttributes !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 44, () => _encode_AttributeList, $.BER)(value.suggestedAttributes, $.BER);
    }
    if (value.alternativeTerm !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeSequenceOf<AttributesPlusTerm>(() => _encode_AttributesPlusTerm, $.BER), $.BER)(value.alternativeTerm, $.BER);
    }
    if (value.globalOccurrences !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.globalOccurrences, $.BER);
    }
    if (value.byAttributes !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_OccurrenceByAttributes, $.BER)(value.byAttributes, $.BER);
    }
    if (value.otherTermInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 201, () => _encode_OtherInformation, $.BER)(value.otherTermInfo, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_TermInfo(value, elGetter);
}


/* eslint-enable */
