/* eslint-disable */
import {
    INTEGER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { FormatSpec, _decode_FormatSpec, _encode_FormatSpec } from "../RecordSyntax-summary/FormatSpec.ta.mjs";
// export { FormatSpec, _decode_FormatSpec, _encode_FormatSpec } from "../RecordSyntax-summary/FormatSpec.ta.mjs";


/**
 * @summary BriefBib
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BriefBib ::= SEQUENCE {
 *    title                  [1]   IMPLICIT InternationalString,
 *    author                 [2]   IMPLICIT InternationalString OPTIONAL,
 *    callNumber             [3]   IMPLICIT InternationalString OPTIONAL,
 *    recordType             [4]   IMPLICIT InternationalString OPTIONAL,
 *    bibliographicLevel     [5]   IMPLICIT InternationalString OPTIONAL,
 *    format                 [6]   IMPLICIT SEQUENCE OF FormatSpec OPTIONAL,
 *    publicationPlace       [7]   IMPLICIT InternationalString OPTIONAL,
 *    publicationDate        [8]   IMPLICIT InternationalString OPTIONAL,
 *    targetSystemKey        [9]   IMPLICIT InternationalString OPTIONAL,
 *    satisfyingElement      [10]  IMPLICIT InternationalString OPTIONAL,
 *    rank                   [11]  IMPLICIT INTEGER OPTIONAL,
 *    documentId             [12]  IMPLICIT InternationalString OPTIONAL,
 *    abstract               [13]  IMPLICIT InternationalString OPTIONAL,
 *    otherInfo                    OtherInformation OPTIONAL}
 * ```
 * 
 * @class
 */
export
class BriefBib {
    constructor (
        /**
         * @summary `title`.
         * @public
         * @readonly
         */
        readonly title: InternationalString,
        /**
         * @summary `author`.
         * @public
         * @readonly
         */
        readonly author: OPTIONAL<InternationalString>,
        /**
         * @summary `callNumber`.
         * @public
         * @readonly
         */
        readonly callNumber: OPTIONAL<InternationalString>,
        /**
         * @summary `recordType`.
         * @public
         * @readonly
         */
        readonly recordType: OPTIONAL<InternationalString>,
        /**
         * @summary `bibliographicLevel`.
         * @public
         * @readonly
         */
        readonly bibliographicLevel: OPTIONAL<InternationalString>,
        /**
         * @summary `format`.
         * @public
         * @readonly
         */
        readonly format: OPTIONAL<FormatSpec[]>,
        /**
         * @summary `publicationPlace`.
         * @public
         * @readonly
         */
        readonly publicationPlace: OPTIONAL<InternationalString>,
        /**
         * @summary `publicationDate`.
         * @public
         * @readonly
         */
        readonly publicationDate: OPTIONAL<InternationalString>,
        /**
         * @summary `targetSystemKey`.
         * @public
         * @readonly
         */
        readonly targetSystemKey: OPTIONAL<InternationalString>,
        /**
         * @summary `satisfyingElement`.
         * @public
         * @readonly
         */
        readonly satisfyingElement: OPTIONAL<InternationalString>,
        /**
         * @summary `rank`.
         * @public
         * @readonly
         */
        readonly rank: OPTIONAL<INTEGER>,
        /**
         * @summary `documentId`.
         * @public
         * @readonly
         */
        readonly documentId: OPTIONAL<InternationalString>,
        /**
         * @summary `abstract`.
         * @public
         * @readonly
         */
        readonly abstract: OPTIONAL<InternationalString>,
        /**
         * @summary `otherInfo`.
         * @public
         * @readonly
         */
        readonly otherInfo: OPTIONAL<OtherInformation>
    ) {}

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
    /* FIXME: title COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: author COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: callNumber COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: recordType COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: bibliographicLevel COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("format", true, $.hasTag(_TagClass.context, 6)),
    /* FIXME: publicationPlace COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: publicationDate COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: targetSystemKey COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: satisfyingElement COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("rank", true, $.hasTag(_TagClass.context, 11)),
    /* FIXME: documentId COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: abstract COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: otherInfo COULD_NOT_RESOLVE_TYPE_DEF */
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
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_InternationalString, $.BER)(value.title, $.BER),
            /* IF_ABSENT  */ ((value.author === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_InternationalString, $.BER)(value.author, $.BER)),
            /* IF_ABSENT  */ ((value.callNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_InternationalString, $.BER)(value.callNumber, $.BER)),
            /* IF_ABSENT  */ ((value.recordType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_InternationalString, $.BER)(value.recordType, $.BER)),
            /* IF_ABSENT  */ ((value.bibliographicLevel === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_InternationalString, $.BER)(value.bibliographicLevel, $.BER)),
            /* IF_ABSENT  */ ((value.format === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeSequenceOf<FormatSpec>(() => _encode_FormatSpec, $.BER), $.BER)(value.format, $.BER)),
            /* IF_ABSENT  */ ((value.publicationPlace === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_InternationalString, $.BER)(value.publicationPlace, $.BER)),
            /* IF_ABSENT  */ ((value.publicationDate === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_InternationalString, $.BER)(value.publicationDate, $.BER)),
            /* IF_ABSENT  */ ((value.targetSystemKey === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_InternationalString, $.BER)(value.targetSystemKey, $.BER)),
            /* IF_ABSENT  */ ((value.satisfyingElement === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_InternationalString, $.BER)(value.satisfyingElement, $.BER)),
            /* IF_ABSENT  */ ((value.rank === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => $._encodeInteger, $.BER)(value.rank, $.BER)),
            /* IF_ABSENT  */ ((value.documentId === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_InternationalString, $.BER)(value.documentId, $.BER)),
            /* IF_ABSENT  */ ((value.abstract === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => _encode_InternationalString, $.BER)(value.abstract, $.BER)),
            /* IF_ABSENT  */ ((value.otherInfo === undefined) ? undefined : _encode_OtherInformation(value.otherInfo, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_BriefBib(value, elGetter);
}


/* eslint-enable */
