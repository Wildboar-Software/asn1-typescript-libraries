/* eslint-disable */
import {
    INTEGER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CommonInfo, _decode_CommonInfo, _encode_CommonInfo } from "../RecordSyntax-explain/CommonInfo.ta.mjs";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";
import { HumanString, _decode_HumanString, _encode_HumanString } from "../RecordSyntax-explain/HumanString.ta.mjs";
import { AttributeCombinations, _decode_AttributeCombinations, _encode_AttributeCombinations } from "../RecordSyntax-explain/AttributeCombinations.ta.mjs";
import { TermListDetails_scanInfo, _decode_TermListDetails_scanInfo, _encode_TermListDetails_scanInfo } from "../RecordSyntax-explain/TermListDetails-scanInfo.ta.mjs";
import { Term, _decode_Term, _encode_Term } from "../Z39-50-APDU-2001/Term.ta.mjs";


/**
 * @summary TermListDetails
 * @description
 * Descriptive information for one term list. There is one record for each term
 * list named by a TermListInfo record. ANSI/NISO Z39.50-2003 §3.2.10.3.10.
 * 
 * Search with ExplainCategory `TermListDetails` and TermListName. The search
 * may also use HumanStringLanguage, DateAdded, DateChanged, or DateExpires.
 * ANSI/NISO Z39.50-2003 §3.2.10.1.2 and §3.2.10.1.3.
 * 
 * The name is the only brief element. The attribute combination is
 * mandatory in a full record. ANSI/NISO Z39.50-2003 ASN.1 comment 1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TermListDetails ::= SEQUENCE { -- one for each termList in TermListInfo
 *     commonInfo              [0] IMPLICIT CommonInfo OPTIONAL,
 *     -- Key elements follow:
 *     termListName            [1] IMPLICIT InternationalString,
 *     -- Non-key elements (all non-brief) follow:
 *     description             [2] IMPLICIT HumanString OPTIONAL,
 *     attributes              [3] IMPLICIT AttributeCombinations OPTIONAL,
 *     -- Pattern for attributes that hit this list. Mandatory in full record
 *     scanInfo                [4] IMPLICIT SEQUENCE {
 *         maxStepSize             [0] IMPLICIT INTEGER OPTIONAL,
 *         collatingSequence       [1] IMPLICIT HumanString OPTIONAL,
 *         increasing              [2] IMPLICIT BOOLEAN OPTIONAL
 *     } OPTIONAL,
 *     -- Occurs only if list is scanable.
 *     -- If list is scanable and if scanInfo is omitted, server doesn't consider these important.
 *     estNumberTerms          [5] IMPLICIT INTEGER OPTIONAL,
 *     sampleTerms             [6] IMPLICIT SEQUENCE OF Term OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class TermListDetails {
    /**
     * @summary `commonInfo`.
     * @description
     * Dates this Explain record was added and last changed, when it expires,
     * and the language of its human-readable text. Element set `B` includes
     * this component except `otherInfo`. DateAdded, DateChanged, and
     * DateExpires search these dates. ANSI/NISO Z39.50-2003 §3.2.10.3,
     * §3.2.10.1.3; ASN.1 comment 1.
     * @public
     * @readonly
     */
    readonly commonInfo: OPTIONAL<CommonInfo>;
    /**
     * @summary `termListName`.
     * @description
     * Name of the term list. Key, searched with TermListName. It is the name
     * recorded for this list in TermListInfo, unique for the database. Brief.
     * ANSI/NISO Z39.50-2003 §3.2.10.3.7, §3.2.10.3.10.
     * @public
     * @readonly
     */
    readonly termListName: InternationalString;
    /**
     * @summary `description`.
     * @description
     * Human-readable description of the term list. Non-brief. ANSI/NISO
     * Z39.50-2003 §3.2.10.3.10.
     * @public
     * @readonly
     */
    readonly description: OPTIONAL<HumanString>;
    /**
     * @summary `attributes`.
     * @description
     * Attribute combination corresponding to this list: the pattern of
     * attributes that hit it. If the list may be scanned, Scan uses this
     * combination. Non-brief, and mandatory in a full record. ANSI/NISO
     * Z39.50-2003 §3.2.10.3.10.
     * @public
     * @readonly
     */
    readonly attributes: OPTIONAL<AttributeCombinations>;
    /**
     * @summary `scanInfo`.
     * @description
     * Scan step size, collating sequence, and order. Occurs only if the list is
     * scanable. If the list is scanable and this is omitted, the server does
     * not consider these important. Non-brief. ANSI/NISO Z39.50-2003
     * §3.2.10.3.10.
     * @public
     * @readonly
     */
    readonly scanInfo: OPTIONAL<TermListDetails_scanInfo>;
    /**
     * @summary `estNumberTerms`.
     * @description
     * Estimated number of terms. Non-brief. ANSI/NISO Z39.50-2003 §3.2.10.3.10.
     * @public
     * @readonly
     */
    readonly estNumberTerms: OPTIONAL<INTEGER>;
    /**
     * @summary `sampleTerms`.
     * @description
     * Sample terms. They are not guaranteed to be valid. Optimally they are a
     * uniformly distributed sampling of the list. Non-brief. ANSI/NISO
     * Z39.50-2003 §3.2.10.3.10.
     * @public
     * @readonly
     */
    readonly sampleTerms: OPTIONAL<Term[]>;

    constructor (
        commonInfo: OPTIONAL<CommonInfo>,
        termListName: InternationalString,
        description: OPTIONAL<HumanString>,
        attributes: OPTIONAL<AttributeCombinations>,
        scanInfo: OPTIONAL<TermListDetails_scanInfo>,
        estNumberTerms: OPTIONAL<INTEGER>,
        sampleTerms: OPTIONAL<Term[]>
    ) {
        this.commonInfo = commonInfo;
        this.termListName = termListName;
        this.description = description;
        this.attributes = attributes;
        this.scanInfo = scanInfo;
        this.estNumberTerms = estNumberTerms;
        this.sampleTerms = sampleTerms;
    }

    /**
     * @summary Restructures an object into a TermListDetails
     * @description
     * 
     * This takes an `object` and converts it to a `TermListDetails`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TermListDetails`.
     * @returns {TermListDetails}
     */
    public static _from_object (_o: { [_K in keyof (TermListDetails)]: (TermListDetails)[_K] }): TermListDetails {
        return new TermListDetails(_o.commonInfo, _o.termListName, _o.description, _o.attributes, _o.scanInfo, _o.estNumberTerms, _o.sampleTerms);
    }


}

/**
 * @summary The Leading Root Component Types of TermListDetails
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TermListDetails: $.ComponentSpec[] = [
    new $.ComponentSpec("commonInfo", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("termListName", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("description", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("attributes", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("scanInfo", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("estNumberTerms", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("sampleTerms", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of TermListDetails
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TermListDetails: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TermListDetails
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TermListDetails: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TermListDetails: $.ASN1Decoder<TermListDetails> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TermListDetails
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TermListDetails (el: _Element): TermListDetails {
    if (!_cached_decoder_for_TermListDetails) { _cached_decoder_for_TermListDetails = function (el: _Element): TermListDetails {
    let commonInfo: OPTIONAL<CommonInfo>;
    let termListName!: InternationalString;
    let description: OPTIONAL<HumanString>;
    let attributes: OPTIONAL<AttributeCombinations>;
    let scanInfo: OPTIONAL<TermListDetails_scanInfo>;
    let estNumberTerms: OPTIONAL<INTEGER>;
    let sampleTerms: OPTIONAL<Term[]>;
    const callbacks: $.DecodingMap = {
        "commonInfo": (_el: _Element): void => { commonInfo = $._decode_implicit<CommonInfo>(() => _decode_CommonInfo)(_el); },
        "termListName": (_el: _Element): void => { termListName = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "description": (_el: _Element): void => { description = $._decode_implicit<HumanString>(() => _decode_HumanString)(_el); },
        "attributes": (_el: _Element): void => { attributes = $._decode_implicit<AttributeCombinations>(() => _decode_AttributeCombinations)(_el); },
        "scanInfo": (_el: _Element): void => { scanInfo = $._decode_implicit<TermListDetails_scanInfo>(() => _decode_TermListDetails_scanInfo)(_el); },
        "estNumberTerms": (_el: _Element): void => { estNumberTerms = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "sampleTerms": (_el: _Element): void => { sampleTerms = $._decode_implicit<Term[]>(() => $._decodeSequenceOf<Term>(() => _decode_Term))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TermListDetails,
        _extension_additions_list_spec_for_TermListDetails,
        _root_component_type_list_2_spec_for_TermListDetails,
        undefined,
    );
    return new TermListDetails(
        commonInfo,
        termListName,
        description,
        attributes,
        scanInfo,
        estNumberTerms,
        sampleTerms
    );
}; }
    return _cached_decoder_for_TermListDetails(el);
}

let _cached_encoder_for_TermListDetails: $.ASN1Encoder<TermListDetails> | null = null;

/**
 * @summary Encodes a(n) TermListDetails into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TermListDetails, encoded as an ASN.1 Element.
 */
export
function _encode_TermListDetails (value: TermListDetails, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TermListDetails) { _cached_encoder_for_TermListDetails = function (value: TermListDetails, elGetter: $.ASN1Encoder<TermListDetails>): _Element {
    const _components: _Element[] = new Array(7);
    let _components_i = 0;
    if (value.commonInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_CommonInfo, $.BER)(value.commonInfo, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_InternationalString, $.BER)(value.termListName, $.BER);
    if (value.description !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_HumanString, $.BER)(value.description, $.BER);
    }
    if (value.attributes !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_AttributeCombinations, $.BER)(value.attributes, $.BER);
    }
    if (value.scanInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_TermListDetails_scanInfo, $.BER)(value.scanInfo, $.BER);
    }
    if (value.estNumberTerms !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER)(value.estNumberTerms, $.BER);
    }
    if (value.sampleTerms !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeSequenceOf<Term>(() => _encode_Term, $.BER), $.BER)(value.sampleTerms, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_TermListDetails(value, elGetter);
}


/* eslint-enable */
