/* eslint-disable */
import {
    BOOLEAN,
    INTEGER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RecordTag, _decode_RecordTag, _encode_RecordTag } from "../RecordSyntax-explain/RecordTag.ta.mjs";
// export { RecordTag, _decode_RecordTag, _encode_RecordTag } from "../RecordSyntax-explain/RecordTag.ta.mjs";
import { Path, _decode_Path, _encode_Path } from "../RecordSyntax-explain/Path.ta.mjs";
// export { Path, _decode_Path, _encode_Path } from "../RecordSyntax-explain/Path.ta.mjs";
import { HumanString, _decode_HumanString, _encode_HumanString } from "../RecordSyntax-explain/HumanString.ta.mjs";
// export { HumanString, _decode_HumanString, _encode_HumanString } from "../RecordSyntax-explain/HumanString.ta.mjs";
import { AttributeCombinations, _decode_AttributeCombinations, _encode_AttributeCombinations } from "../RecordSyntax-explain/AttributeCombinations.ta.mjs";
// export { AttributeCombinations, _decode_AttributeCombinations, _encode_AttributeCombinations } from "../RecordSyntax-explain/AttributeCombinations.ta.mjs";


/**
 * @summary PerElementDetails
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PerElementDetails ::= SEQUENCE {
 *         name              [0]   IMPLICIT InternationalString OPTIONAL,
 *                                    -- If the name is omitted, the record
 *                                    -- syntax's name for this element is
 *                                    -- appropriate.
 *         recordTag         [1]   IMPLICIT RecordTag OPTIONAL,
 *                                    -- The record tag may be omitted if tags are
 *                                    -- inappropriate for the syntax, or if the
 *                                    -- origin can be expected to know it for
 *                                    -- some other reason.
 *         schemaTags        [2]   IMPLICIT SEQUENCE OF Path OPTIONAL,
 *                                    -- The information from the listed schema
 *                                    -- elements is in some way to produce the
 *                                    -- data sent in the listed record tag. The
 *                                    -- 'contents' element below may describe the
 *                                    -- the logic used.
 *         maxSize           [3]   IMPLICIT INTEGER OPTIONAL,
 *         minSize           [4]   IMPLICIT INTEGER OPTIONAL,
 *         avgSize           [5]   IMPLICIT INTEGER OPTIONAL,
 *         fixedSize         [6]   IMPLICIT INTEGER OPTIONAL,
 *         repeatable        [8]   IMPLICIT BOOLEAN,
 *         required          [9]   IMPLICIT BOOLEAN, 
 *                                    -- 'required' really means that target will
 *                                    -- always supply the element.
 *         description       [12]  IMPLICIT HumanString OPTIONAL,
 *         contents          [13]  IMPLICIT HumanString OPTIONAL,
 *         billingInfo       [14]  IMPLICIT HumanString OPTIONAL,
 *         restrictions      [15]  IMPLICIT HumanString OPTIONAL,
 *         alternateNames    [16]  IMPLICIT SEQUENCE OF InternationalString
 *                                     OPTIONAL,
 *         genericNames      [17]  IMPLICIT SEQUENCE OF InternationalString
 *                                     OPTIONAL,
 *         searchAccess      [18]  IMPLICIT AttributeCombinations OPTIONAL}
 * ```
 * 
 * @class
 */
export
class PerElementDetails {
    constructor (
        /**
         * @summary `name`.
         * @public
         * @readonly
         */
        readonly name: OPTIONAL<InternationalString>,
        /**
         * @summary `recordTag`.
         * @public
         * @readonly
         */
        readonly recordTag: OPTIONAL<RecordTag>,
        /**
         * @summary `schemaTags`.
         * @public
         * @readonly
         */
        readonly schemaTags: OPTIONAL<Path[]>,
        /**
         * @summary `maxSize`.
         * @public
         * @readonly
         */
        readonly maxSize: OPTIONAL<INTEGER>,
        /**
         * @summary `minSize`.
         * @public
         * @readonly
         */
        readonly minSize: OPTIONAL<INTEGER>,
        /**
         * @summary `avgSize`.
         * @public
         * @readonly
         */
        readonly avgSize: OPTIONAL<INTEGER>,
        /**
         * @summary `fixedSize`.
         * @public
         * @readonly
         */
        readonly fixedSize: OPTIONAL<INTEGER>,
        /**
         * @summary `repeatable`.
         * @public
         * @readonly
         */
        readonly repeatable: BOOLEAN,
        /**
         * @summary `required`.
         * @public
         * @readonly
         */
        readonly required: BOOLEAN,
        /**
         * @summary `description`.
         * @public
         * @readonly
         */
        readonly description: OPTIONAL<HumanString>,
        /**
         * @summary `contents`.
         * @public
         * @readonly
         */
        readonly contents: OPTIONAL<HumanString>,
        /**
         * @summary `billingInfo`.
         * @public
         * @readonly
         */
        readonly billingInfo: OPTIONAL<HumanString>,
        /**
         * @summary `restrictions`.
         * @public
         * @readonly
         */
        readonly restrictions: OPTIONAL<HumanString>,
        /**
         * @summary `alternateNames`.
         * @public
         * @readonly
         */
        readonly alternateNames: OPTIONAL<InternationalString[]>,
        /**
         * @summary `genericNames`.
         * @public
         * @readonly
         */
        readonly genericNames: OPTIONAL<InternationalString[]>,
        /**
         * @summary `searchAccess`.
         * @public
         * @readonly
         */
        readonly searchAccess: OPTIONAL<AttributeCombinations>
    ) {}

    /**
     * @summary Restructures an object into a PerElementDetails
     * @description
     * 
     * This takes an `object` and converts it to a `PerElementDetails`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PerElementDetails`.
     * @returns {PerElementDetails}
     */
    public static _from_object (_o: { [_K in keyof (PerElementDetails)]: (PerElementDetails)[_K] }): PerElementDetails {
        return new PerElementDetails(_o.name, _o.recordTag, _o.schemaTags, _o.maxSize, _o.minSize, _o.avgSize, _o.fixedSize, _o.repeatable, _o.required, _o.description, _o.contents, _o.billingInfo, _o.restrictions, _o.alternateNames, _o.genericNames, _o.searchAccess);
    }


}

/**
 * @summary The Leading Root Component Types of PerElementDetails
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PerElementDetails: $.ComponentSpec[] = [
    /* FIXME: name COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("recordTag", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("schemaTags", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("maxSize", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("minSize", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("avgSize", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("fixedSize", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("repeatable", false, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("required", false, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("description", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("contents", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("billingInfo", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("restrictions", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("alternateNames", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("genericNames", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("searchAccess", true, $.hasTag(_TagClass.context, 18))
];

/**
 * @summary The Trailing Root Component Types of PerElementDetails
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PerElementDetails: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PerElementDetails
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PerElementDetails: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PerElementDetails: $.ASN1Decoder<PerElementDetails> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PerElementDetails
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PerElementDetails (el: _Element): PerElementDetails {
    if (!_cached_decoder_for_PerElementDetails) { _cached_decoder_for_PerElementDetails = function (el: _Element): PerElementDetails {
    let name: OPTIONAL<InternationalString>;
    let recordTag: OPTIONAL<RecordTag>;
    let schemaTags: OPTIONAL<Path[]>;
    let maxSize: OPTIONAL<INTEGER>;
    let minSize: OPTIONAL<INTEGER>;
    let avgSize: OPTIONAL<INTEGER>;
    let fixedSize: OPTIONAL<INTEGER>;
    let repeatable!: BOOLEAN;
    let required!: BOOLEAN;
    let description: OPTIONAL<HumanString>;
    let contents: OPTIONAL<HumanString>;
    let billingInfo: OPTIONAL<HumanString>;
    let restrictions: OPTIONAL<HumanString>;
    let alternateNames: OPTIONAL<InternationalString[]>;
    let genericNames: OPTIONAL<InternationalString[]>;
    let searchAccess: OPTIONAL<AttributeCombinations>;
    const callbacks: $.DecodingMap = {
        "name": (_el: _Element): void => { name = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "recordTag": (_el: _Element): void => { recordTag = $._decode_implicit<RecordTag>(() => _decode_RecordTag)(_el); },
        "schemaTags": (_el: _Element): void => { schemaTags = $._decode_implicit<Path[]>(() => $._decodeSequenceOf<Path>(() => _decode_Path))(_el); },
        "maxSize": (_el: _Element): void => { maxSize = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "minSize": (_el: _Element): void => { minSize = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "avgSize": (_el: _Element): void => { avgSize = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "fixedSize": (_el: _Element): void => { fixedSize = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "repeatable": (_el: _Element): void => { repeatable = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "required": (_el: _Element): void => { required = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "description": (_el: _Element): void => { description = $._decode_implicit<HumanString>(() => _decode_HumanString)(_el); },
        "contents": (_el: _Element): void => { contents = $._decode_implicit<HumanString>(() => _decode_HumanString)(_el); },
        "billingInfo": (_el: _Element): void => { billingInfo = $._decode_implicit<HumanString>(() => _decode_HumanString)(_el); },
        "restrictions": (_el: _Element): void => { restrictions = $._decode_implicit<HumanString>(() => _decode_HumanString)(_el); },
        "alternateNames": (_el: _Element): void => { alternateNames = $._decode_implicit<InternationalString[]>(() => $._decodeSequenceOf<InternationalString>(() => _decode_InternationalString))(_el); },
        "genericNames": (_el: _Element): void => { genericNames = $._decode_implicit<InternationalString[]>(() => $._decodeSequenceOf<InternationalString>(() => _decode_InternationalString))(_el); },
        "searchAccess": (_el: _Element): void => { searchAccess = $._decode_implicit<AttributeCombinations>(() => _decode_AttributeCombinations)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PerElementDetails,
        _extension_additions_list_spec_for_PerElementDetails,
        _root_component_type_list_2_spec_for_PerElementDetails,
        undefined,
    );
    return new PerElementDetails(
        name,
        recordTag,
        schemaTags,
        maxSize,
        minSize,
        avgSize,
        fixedSize,
        repeatable,
        required,
        description,
        contents,
        billingInfo,
        restrictions,
        alternateNames,
        genericNames,
        searchAccess
    );
}; }
    return _cached_decoder_for_PerElementDetails(el);
}

let _cached_encoder_for_PerElementDetails: $.ASN1Encoder<PerElementDetails> | null = null;

/**
 * @summary Encodes a(n) PerElementDetails into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PerElementDetails, encoded as an ASN.1 Element.
 */
export
function _encode_PerElementDetails (value: PerElementDetails, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PerElementDetails) { _cached_encoder_for_PerElementDetails = function (value: PerElementDetails, elGetter: $.ASN1Encoder<PerElementDetails>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.name === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_InternationalString, $.BER)(value.name, $.BER)),
            /* IF_ABSENT  */ ((value.recordTag === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_RecordTag, $.BER)(value.recordTag, $.BER)),
            /* IF_ABSENT  */ ((value.schemaTags === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<Path>(() => _encode_Path, $.BER), $.BER)(value.schemaTags, $.BER)),
            /* IF_ABSENT  */ ((value.maxSize === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.maxSize, $.BER)),
            /* IF_ABSENT  */ ((value.minSize === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.minSize, $.BER)),
            /* IF_ABSENT  */ ((value.avgSize === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER)(value.avgSize, $.BER)),
            /* IF_ABSENT  */ ((value.fixedSize === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeInteger, $.BER)(value.fixedSize, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => $._encodeBoolean, $.BER)(value.repeatable, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 9, () => $._encodeBoolean, $.BER)(value.required, $.BER),
            /* IF_ABSENT  */ ((value.description === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_HumanString, $.BER)(value.description, $.BER)),
            /* IF_ABSENT  */ ((value.contents === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => _encode_HumanString, $.BER)(value.contents, $.BER)),
            /* IF_ABSENT  */ ((value.billingInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => _encode_HumanString, $.BER)(value.billingInfo, $.BER)),
            /* IF_ABSENT  */ ((value.restrictions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 15, () => _encode_HumanString, $.BER)(value.restrictions, $.BER)),
            /* IF_ABSENT  */ ((value.alternateNames === undefined) ? undefined : $._encode_implicit(_TagClass.context, 16, () => $._encodeSequenceOf<InternationalString>(() => _encode_InternationalString, $.BER), $.BER)(value.alternateNames, $.BER)),
            /* IF_ABSENT  */ ((value.genericNames === undefined) ? undefined : $._encode_implicit(_TagClass.context, 17, () => $._encodeSequenceOf<InternationalString>(() => _encode_InternationalString, $.BER), $.BER)(value.genericNames, $.BER)),
            /* IF_ABSENT  */ ((value.searchAccess === undefined) ? undefined : $._encode_implicit(_TagClass.context, 18, () => _encode_AttributeCombinations, $.BER)(value.searchAccess, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PerElementDetails(value, elGetter);
}


/* eslint-enable */
