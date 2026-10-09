/* eslint-disable */
import {
    INTEGER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";
import { FormatSpec, _decode_FormatSpec, _encode_FormatSpec } from "../RecordSyntax-summary/FormatSpec.ta.mjs";
import { OtherInformation, _decode_OtherInformation, _encode_OtherInformation } from "../Z39-50-APDU-2001/OtherInformation.ta.mjs";


/**
 * @summary BriefBib
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BriefBib ::= SEQUENCE {
 *    title                [1]  IMPLICIT InternationalString,
 *    author               [2]  IMPLICIT InternationalString OPTIONAL,
 *    callNumber           [3]  IMPLICIT InternationalString OPTIONAL,
 *    recordType           [4]  IMPLICIT InternationalString OPTIONAL,
 *    bibliographicLevel   [5]  IMPLICIT InternationalString OPTIONAL,
 *    format               [6]  IMPLICIT SEQUENCE OF FormatSpec OPTIONAL,
 *    publicationPlace     [7]  IMPLICIT InternationalString OPTIONAL,
 *    publicationDate      [8]  IMPLICIT InternationalString OPTIONAL,
 *    targetSystemKey      [9]  IMPLICIT InternationalString OPTIONAL,
 *    satisfyingElement    [10] IMPLICIT InternationalString OPTIONAL,
 *    rank                 [11] IMPLICIT INTEGER OPTIONAL,
 *    documentId           [12] IMPLICIT InternationalString OPTIONAL,
 *    abstract             [13] IMPLICIT InternationalString OPTIONAL,
 *    otherInfo            OtherInformation OPTIONAL}
 * ```
 * 
 * @class
 */
export
class BriefBib {
    /**
     * @summary `title`.
     * @public
     * @readonly
     */
    readonly title: InternationalString;
    /**
     * @summary `author`.
     * @public
     * @readonly
     */
    readonly author: OPTIONAL<InternationalString>;
    /**
     * @summary `callNumber`.
     * @public
     * @readonly
     */
    readonly callNumber: OPTIONAL<InternationalString>;
    /**
     * @summary `recordType`.
     * @public
     * @readonly
     */
    readonly recordType: OPTIONAL<InternationalString>;
    /**
     * @summary `bibliographicLevel`.
     * @public
     * @readonly
     */
    readonly bibliographicLevel: OPTIONAL<InternationalString>;
    /**
     * @summary `format`.
     * @public
     * @readonly
     */
    readonly format: OPTIONAL<FormatSpec[]>;
    /**
     * @summary `publicationPlace`.
     * @public
     * @readonly
     */
    readonly publicationPlace: OPTIONAL<InternationalString>;
    /**
     * @summary `publicationDate`.
     * @public
     * @readonly
     */
    readonly publicationDate: OPTIONAL<InternationalString>;
    /**
     * @summary `targetSystemKey`.
     * @public
     * @readonly
     */
    readonly targetSystemKey: OPTIONAL<InternationalString>;
    /**
     * @summary `satisfyingElement`.
     * @public
     * @readonly
     */
    readonly satisfyingElement: OPTIONAL<InternationalString>;
    /**
     * @summary `rank`.
     * @public
     * @readonly
     */
    readonly rank: OPTIONAL<INTEGER>;
    /**
     * @summary `documentId`.
     * @public
     * @readonly
     */
    readonly documentId: OPTIONAL<InternationalString>;
    /**
     * @summary `abstract`.
     * @public
     * @readonly
     */
    readonly abstract: OPTIONAL<InternationalString>;
    /**
     * @summary `otherInfo`.
     * @public
     * @readonly
     */
    readonly otherInfo: OPTIONAL<OtherInformation>;

    constructor (
        title: InternationalString,
        author: OPTIONAL<InternationalString>,
        callNumber: OPTIONAL<InternationalString>,
        recordType: OPTIONAL<InternationalString>,
        bibliographicLevel: OPTIONAL<InternationalString>,
        format: OPTIONAL<FormatSpec[]>,
        publicationPlace: OPTIONAL<InternationalString>,
        publicationDate: OPTIONAL<InternationalString>,
        targetSystemKey: OPTIONAL<InternationalString>,
        satisfyingElement: OPTIONAL<InternationalString>,
        rank: OPTIONAL<INTEGER>,
        documentId: OPTIONAL<InternationalString>,
        abstract: OPTIONAL<InternationalString>,
        otherInfo: OPTIONAL<OtherInformation>
    ) {
        this.title = title;
        this.author = author;
        this.callNumber = callNumber;
        this.recordType = recordType;
        this.bibliographicLevel = bibliographicLevel;
        this.format = format;
        this.publicationPlace = publicationPlace;
        this.publicationDate = publicationDate;
        this.targetSystemKey = targetSystemKey;
        this.satisfyingElement = satisfyingElement;
        this.rank = rank;
        this.documentId = documentId;
        this.abstract = abstract;
        this.otherInfo = otherInfo;
    }

    /**
     * @summary Restructures an object into a BriefBib
     * @description
     * 
     * This takes an `object` and converts it to a `BriefBib`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BriefBib`.
     * @returns {BriefBib}
     */
    public static _from_object (_o: { [_K in keyof (BriefBib)]: (BriefBib)[_K] }): BriefBib {
        return new BriefBib(_o.title, _o.author, _o.callNumber, _o.recordType, _o.bibliographicLevel, _o.format, _o.publicationPlace, _o.publicationDate, _o.targetSystemKey, _o.satisfyingElement, _o.rank, _o.documentId, _o.abstract, _o.otherInfo);
    }


}

/**
 * @summary The Leading Root Component Types of BriefBib
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_BriefBib: $.ComponentSpec[] = [
    new $.ComponentSpec("title", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("author", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("callNumber", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("recordType", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("bibliographicLevel", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("format", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("publicationPlace", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("publicationDate", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("targetSystemKey", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("satisfyingElement", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("rank", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("documentId", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("abstract", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("otherInfo", true, $.hasTag(_TagClass.context, 201))
];

/**
 * @summary The Trailing Root Component Types of BriefBib
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_BriefBib: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of BriefBib
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_BriefBib: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_BriefBib: $.ASN1Decoder<BriefBib> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BriefBib
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BriefBib (el: _Element): BriefBib {
    if (!_cached_decoder_for_BriefBib) { _cached_decoder_for_BriefBib = function (el: _Element): BriefBib {
    let title!: InternationalString;
    let author: OPTIONAL<InternationalString>;
    let callNumber: OPTIONAL<InternationalString>;
    let recordType: OPTIONAL<InternationalString>;
    let bibliographicLevel: OPTIONAL<InternationalString>;
    let format: OPTIONAL<FormatSpec[]>;
    let publicationPlace: OPTIONAL<InternationalString>;
    let publicationDate: OPTIONAL<InternationalString>;
    let targetSystemKey: OPTIONAL<InternationalString>;
    let satisfyingElement: OPTIONAL<InternationalString>;
    let rank: OPTIONAL<INTEGER>;
    let documentId: OPTIONAL<InternationalString>;
    let abstract: OPTIONAL<InternationalString>;
    let otherInfo: OPTIONAL<OtherInformation>;
    const callbacks: $.DecodingMap = {
        "title": (_el: _Element): void => { title = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "author": (_el: _Element): void => { author = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "callNumber": (_el: _Element): void => { callNumber = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "bibliographicLevel": (_el: _Element): void => { bibliographicLevel = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "format": (_el: _Element): void => { format = $._decode_implicit<FormatSpec[]>(() => $._decodeSequenceOf<FormatSpec>(() => _decode_FormatSpec))(_el); },
        "publicationPlace": (_el: _Element): void => { publicationPlace = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "publicationDate": (_el: _Element): void => { publicationDate = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "targetSystemKey": (_el: _Element): void => { targetSystemKey = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "satisfyingElement": (_el: _Element): void => { satisfyingElement = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "rank": (_el: _Element): void => { rank = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "documentId": (_el: _Element): void => { documentId = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "abstract": (_el: _Element): void => { abstract = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "otherInfo": (_el: _Element): void => { otherInfo = _decode_OtherInformation(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_BriefBib,
        _extension_additions_list_spec_for_BriefBib,
        _root_component_type_list_2_spec_for_BriefBib,
        undefined,
    );
    return new BriefBib(
        title,
        author,
        callNumber,
        recordType,
        bibliographicLevel,
        format,
        publicationPlace,
        publicationDate,
        targetSystemKey,
        satisfyingElement,
        rank,
        documentId,
        abstract,
        otherInfo
    );
}; }
    return _cached_decoder_for_BriefBib(el);
}

let _cached_encoder_for_BriefBib: $.ASN1Encoder<BriefBib> | null = null;

/**
 * @summary Encodes a(n) BriefBib into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BriefBib, encoded as an ASN.1 Element.
 */
export
function _encode_BriefBib (value: BriefBib, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BriefBib) { _cached_encoder_for_BriefBib = function (value: BriefBib, elGetter: $.ASN1Encoder<BriefBib>): _Element {
    const _components: _Element[] = new Array(14);
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_InternationalString, $.BER)(value.title, $.BER);
    if (value.author !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_InternationalString, $.BER)(value.author, $.BER);
    }
    if (value.callNumber !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_InternationalString, $.BER)(value.callNumber, $.BER);
    }
    if (value.recordType !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_InternationalString, $.BER)(value.recordType, $.BER);
    }
    if (value.bibliographicLevel !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_InternationalString, $.BER)(value.bibliographicLevel, $.BER);
    }
    if (value.format !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeSequenceOf<FormatSpec>(() => _encode_FormatSpec, $.BER), $.BER)(value.format, $.BER);
    }
    if (value.publicationPlace !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_InternationalString, $.BER)(value.publicationPlace, $.BER);
    }
    if (value.publicationDate !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_InternationalString, $.BER)(value.publicationDate, $.BER);
    }
    if (value.targetSystemKey !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_InternationalString, $.BER)(value.targetSystemKey, $.BER);
    }
    if (value.satisfyingElement !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => _encode_InternationalString, $.BER)(value.satisfyingElement, $.BER);
    }
    if (value.rank !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => $._encodeInteger, $.BER)(value.rank, $.BER);
    }
    if (value.documentId !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => _encode_InternationalString, $.BER)(value.documentId, $.BER);
    }
    if (value.abstract !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => _encode_InternationalString, $.BER)(value.abstract, $.BER);
    }
    if (value.otherInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 201, () => _encode_OtherInformation, $.BER)(value.otherInfo, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_BriefBib(value, elGetter);
}


/* eslint-enable */
