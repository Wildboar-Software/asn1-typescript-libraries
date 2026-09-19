/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CommonInfo, _decode_CommonInfo, _encode_CommonInfo } from "../RecordSyntax-explain/CommonInfo.ta.mjs";
// export { CommonInfo, _decode_CommonInfo, _encode_CommonInfo } from "../RecordSyntax-explain/CommonInfo.ta.mjs";
import { HumanString, _decode_HumanString, _encode_HumanString } from "../RecordSyntax-explain/HumanString.ta.mjs";
// export { HumanString, _decode_HumanString, _encode_HumanString } from "../RecordSyntax-explain/HumanString.ta.mjs";
import { ElementInfo, _decode_ElementInfo, _encode_ElementInfo } from "../RecordSyntax-explain/ElementInfo.ta.mjs";
// export { ElementInfo, _decode_ElementInfo, _encode_ElementInfo } from "../RecordSyntax-explain/ElementInfo.ta.mjs";


/**
 * @summary RecordSyntaxInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RecordSyntaxInfo ::= SEQUENCE {
 *   commonInfo          [0] IMPLICIT CommonInfo OPTIONAL,
 *      -- Key elements follow:
 *   recordSyntax        [1] IMPLICIT OBJECT IDENTIFIER,
 *      -- Non-key brief elements follow:
 *   name                [2] IMPLICIT InternationalString,
 *      -- non-brief elements follow:
 *   transferSyntaxes    [3] IMPLICIT SEQUENCE OF OBJECT IDENTIFIER OPTIONAL,
 *   description         [4] IMPLICIT HumanString OPTIONAL,
 *   asn1Module          [5] IMPLICIT InternationalString OPTIONAL,
 *   abstractStructure   [6] IMPLICIT SEQUENCE OF ElementInfo OPTIONAL
 *                              -- Omitting abstractStructure only means target
 *                              -- isn't using Explain to describe the structure,
 *                              -- not that there is no structure.
 *                     }
 * ```
 * 
 * @class
 */
export
class RecordSyntaxInfo {
    constructor (
        /**
         * @summary `commonInfo`.
         * @public
         * @readonly
         */
        readonly commonInfo: OPTIONAL<CommonInfo>,
        /**
         * @summary `recordSyntax`.
         * @public
         * @readonly
         */
        readonly recordSyntax: OBJECT_IDENTIFIER,
        /**
         * @summary `name`.
         * @public
         * @readonly
         */
        readonly name: InternationalString,
        /**
         * @summary `transferSyntaxes`.
         * @public
         * @readonly
         */
        readonly transferSyntaxes: OPTIONAL<OBJECT_IDENTIFIER[]>,
        /**
         * @summary `description`.
         * @public
         * @readonly
         */
        readonly description: OPTIONAL<HumanString>,
        /**
         * @summary `asn1Module`.
         * @public
         * @readonly
         */
        readonly asn1Module: OPTIONAL<InternationalString>,
        /**
         * @summary `abstractStructure`.
         * @public
         * @readonly
         */
        readonly abstractStructure: OPTIONAL<ElementInfo[]>
    ) {}

    /**
     * @summary Restructures an object into a RecordSyntaxInfo
     * @description
     * 
     * This takes an `object` and converts it to a `RecordSyntaxInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RecordSyntaxInfo`.
     * @returns {RecordSyntaxInfo}
     */
    public static _from_object (_o: { [_K in keyof (RecordSyntaxInfo)]: (RecordSyntaxInfo)[_K] }): RecordSyntaxInfo {
        return new RecordSyntaxInfo(_o.commonInfo, _o.recordSyntax, _o.name, _o.transferSyntaxes, _o.description, _o.asn1Module, _o.abstractStructure);
    }


}

/**
 * @summary The Leading Root Component Types of RecordSyntaxInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RecordSyntaxInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("commonInfo", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("recordSyntax", false, $.hasTag(_TagClass.context, 1)),
    /* FIXME: name COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("transferSyntaxes", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("description", true, $.hasTag(_TagClass.context, 4)),
    /* FIXME: asn1Module COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("abstractStructure", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of RecordSyntaxInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RecordSyntaxInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RecordSyntaxInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RecordSyntaxInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RecordSyntaxInfo: $.ASN1Decoder<RecordSyntaxInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RecordSyntaxInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RecordSyntaxInfo (el: _Element): RecordSyntaxInfo {
    if (!_cached_decoder_for_RecordSyntaxInfo) { _cached_decoder_for_RecordSyntaxInfo = function (el: _Element): RecordSyntaxInfo {
    let commonInfo: OPTIONAL<CommonInfo>;
    let recordSyntax!: OBJECT_IDENTIFIER;
    let name!: InternationalString;
    let transferSyntaxes: OPTIONAL<OBJECT_IDENTIFIER[]>;
    let description: OPTIONAL<HumanString>;
    let asn1Module: OPTIONAL<InternationalString>;
    let abstractStructure: OPTIONAL<ElementInfo[]>;
    const callbacks: $.DecodingMap = {
        "commonInfo": (_el: _Element): void => { commonInfo = $._decode_implicit<CommonInfo>(() => _decode_CommonInfo)(_el); },
        "recordSyntax": (_el: _Element): void => { recordSyntax = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "name": (_el: _Element): void => { name = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "transferSyntaxes": (_el: _Element): void => { transferSyntaxes = $._decode_implicit<OBJECT_IDENTIFIER[]>(() => $._decodeSequenceOf<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier))(_el); },
        "description": (_el: _Element): void => { description = $._decode_implicit<HumanString>(() => _decode_HumanString)(_el); },
        "asn1Module": (_el: _Element): void => { asn1Module = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "abstractStructure": (_el: _Element): void => { abstractStructure = $._decode_implicit<ElementInfo[]>(() => $._decodeSequenceOf<ElementInfo>(() => _decode_ElementInfo))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RecordSyntaxInfo,
        _extension_additions_list_spec_for_RecordSyntaxInfo,
        _root_component_type_list_2_spec_for_RecordSyntaxInfo,
        undefined,
    );
    return new RecordSyntaxInfo(
        commonInfo,
        recordSyntax,
        name,
        transferSyntaxes,
        description,
        asn1Module,
        abstractStructure
    );
}; }
    return _cached_decoder_for_RecordSyntaxInfo(el);
}

let _cached_encoder_for_RecordSyntaxInfo: $.ASN1Encoder<RecordSyntaxInfo> | null = null;

/**
 * @summary Encodes a(n) RecordSyntaxInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RecordSyntaxInfo, encoded as an ASN.1 Element.
 */
export
function _encode_RecordSyntaxInfo (value: RecordSyntaxInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RecordSyntaxInfo) { _cached_encoder_for_RecordSyntaxInfo = function (value: RecordSyntaxInfo, elGetter: $.ASN1Encoder<RecordSyntaxInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.commonInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_CommonInfo, $.BER)(value.commonInfo, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeObjectIdentifier, $.BER)(value.recordSyntax, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_InternationalString, $.BER)(value.name, $.BER),
            /* IF_ABSENT  */ ((value.transferSyntaxes === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<OBJECT_IDENTIFIER>(() => $._encodeObjectIdentifier, $.BER), $.BER)(value.transferSyntaxes, $.BER)),
            /* IF_ABSENT  */ ((value.description === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_HumanString, $.BER)(value.description, $.BER)),
            /* IF_ABSENT  */ ((value.asn1Module === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_InternationalString, $.BER)(value.asn1Module, $.BER)),
            /* IF_ABSENT  */ ((value.abstractStructure === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeSequenceOf<ElementInfo>(() => _encode_ElementInfo, $.BER), $.BER)(value.abstractStructure, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RecordSyntaxInfo(value, elGetter);
}


/* eslint-enable */
