/* eslint-disable */
import {
    BOOLEAN,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Path, _decode_Path, _encode_Path } from "../RecordSyntax-explain/Path.ta.mjs";
// export { Path, _decode_Path, _encode_Path } from "../RecordSyntax-explain/Path.ta.mjs";
import { ElementDataType, _decode_ElementDataType, _encode_ElementDataType } from "../RecordSyntax-explain/ElementDataType.ta.mjs";
// export { ElementDataType, _decode_ElementDataType, _encode_ElementDataType } from "../RecordSyntax-explain/ElementDataType.ta.mjs";
import { HumanString, _decode_HumanString, _encode_HumanString } from "../RecordSyntax-explain/HumanString.ta.mjs";
// export { HumanString, _decode_HumanString, _encode_HumanString } from "../RecordSyntax-explain/HumanString.ta.mjs";


/**
 * @summary ElementInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ElementInfo ::= SEQUENCE {
 *          elementName      [1] IMPLICIT InternationalString,
 *          elementTagPath   [2] IMPLICIT Path,
 *          dataType         [3] ElementDataType OPTIONAL, 
 *                                 -- If omitted, not specified. 
 *           required        [4] IMPLICIT BOOLEAN,
 *          repeatable       [5] IMPLICIT BOOLEAN,
 *           description     [6] IMPLICIT HumanString OPTIONAL}
 * ```
 * 
 * @class
 */
export
class ElementInfo {
    constructor (
        /**
         * @summary `elementName`.
         * @public
         * @readonly
         */
        readonly elementName: InternationalString,
        /**
         * @summary `elementTagPath`.
         * @public
         * @readonly
         */
        readonly elementTagPath: Path,
        /**
         * @summary `dataType`.
         * @public
         * @readonly
         */
        readonly dataType: OPTIONAL<ElementDataType>,
        /**
         * @summary `required`.
         * @public
         * @readonly
         */
        readonly required: BOOLEAN,
        /**
         * @summary `repeatable`.
         * @public
         * @readonly
         */
        readonly repeatable: BOOLEAN,
        /**
         * @summary `description`.
         * @public
         * @readonly
         */
        readonly description: OPTIONAL<HumanString>
    ) {}

    /**
     * @summary Restructures an object into a ElementInfo
     * @description
     * 
     * This takes an `object` and converts it to a `ElementInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ElementInfo`.
     * @returns {ElementInfo}
     */
    public static _from_object (_o: { [_K in keyof (ElementInfo)]: (ElementInfo)[_K] }): ElementInfo {
        return new ElementInfo(_o.elementName, _o.elementTagPath, _o.dataType, _o.required, _o.repeatable, _o.description);
    }


}

/**
 * @summary The Leading Root Component Types of ElementInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ElementInfo: $.ComponentSpec[] = [
    /* FIXME: elementName COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("elementTagPath", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("dataType", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("required", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("repeatable", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("description", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of ElementInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ElementInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ElementInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ElementInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ElementInfo: $.ASN1Decoder<ElementInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ElementInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ElementInfo (el: _Element): ElementInfo {
    if (!_cached_decoder_for_ElementInfo) { _cached_decoder_for_ElementInfo = function (el: _Element): ElementInfo {
    let elementName!: InternationalString;
    let elementTagPath!: Path;
    let dataType: OPTIONAL<ElementDataType>;
    let required!: BOOLEAN;
    let repeatable!: BOOLEAN;
    let description: OPTIONAL<HumanString>;
    const callbacks: $.DecodingMap = {
        "elementName": (_el: _Element): void => { elementName = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "elementTagPath": (_el: _Element): void => { elementTagPath = $._decode_implicit<Path>(() => _decode_Path)(_el); },
        "dataType": (_el: _Element): void => { dataType = $._decode_explicit<ElementDataType>(() => _decode_ElementDataType)(_el); },
        "required": (_el: _Element): void => { required = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "repeatable": (_el: _Element): void => { repeatable = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "description": (_el: _Element): void => { description = $._decode_implicit<HumanString>(() => _decode_HumanString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ElementInfo,
        _extension_additions_list_spec_for_ElementInfo,
        _root_component_type_list_2_spec_for_ElementInfo,
        undefined,
    );
    return new ElementInfo(
        elementName,
        elementTagPath,
        dataType,
        required,
        repeatable,
        description
    );
}; }
    return _cached_decoder_for_ElementInfo(el);
}

let _cached_encoder_for_ElementInfo: $.ASN1Encoder<ElementInfo> | null = null;

/**
 * @summary Encodes a(n) ElementInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ElementInfo, encoded as an ASN.1 Element.
 */
export
function _encode_ElementInfo (value: ElementInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ElementInfo) { _cached_encoder_for_ElementInfo = function (value: ElementInfo, elGetter: $.ASN1Encoder<ElementInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_InternationalString, $.BER)(value.elementName, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_Path, $.BER)(value.elementTagPath, $.BER),
            /* IF_ABSENT  */ ((value.dataType === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => _encode_ElementDataType, $.BER)(value.dataType, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeBoolean, $.BER)(value.required, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeBoolean, $.BER)(value.repeatable, $.BER),
            /* IF_ABSENT  */ ((value.description === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_HumanString, $.BER)(value.description, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ElementInfo(value, elGetter);
}


/* eslint-enable */
