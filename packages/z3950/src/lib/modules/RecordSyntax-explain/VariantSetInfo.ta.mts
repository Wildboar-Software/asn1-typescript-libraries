/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CommonInfo, _decode_CommonInfo, _encode_CommonInfo } from "../RecordSyntax-explain/CommonInfo.ta.mjs";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";
import { VariantClass, _decode_VariantClass, _encode_VariantClass } from "../RecordSyntax-explain/VariantClass.ta.mjs";


/**
 * @summary VariantSetInfo
 * @description
 * A variant set definition supported by the server: the classes, types, and
 * values of that set. Support of the definition does not mean it is supported
 * for any particular database or element. ANSI/NISO Z39.50-2003 §3.2.10.3.15;
 * ASN.1 comment 12.
 * 
 * Search with ExplainCategory `VariantSetInfo` and VariantSetOID. The search
 * may also use HumanStringLanguage, DateAdded, DateChanged, or DateExpires.
 * ANSI/NISO Z39.50-2003 §3.2.10.1.2 and §3.2.10.1.3. As a search term, version
 * 2 should use a dotted decimal character string; version 3 should use an
 * object identifier. ANSI/NISO Z39.50-2003 Appendix ATR, note 4.
 * 
 * The classes are non-brief and mandatory in a full record. ANSI/NISO
 * Z39.50-2003 ASN.1 comment 1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VariantSetInfo ::= SEQUENCE {
 *     -- SEE COMMENT 12
 *     commonInfo  [0] IMPLICIT CommonInfo OPTIONAL,
 *     -- Key elements follow:
 *     variantSet  [1] IMPLICIT OBJECT IDENTIFIER,
 *     -- Non-key brief elements follow:
 *     name        [2] IMPLICIT InternationalString,
 *     -- Non-brief elements follow:
 *     variants    [3] IMPLICIT SEQUENCE OF VariantClass OPTIONAL
 *     -- Mandatory in full record
 * }
 * ```
 * 
 * @class
 */
export
class VariantSetInfo {
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
     * @summary `variantSet`.
     * @description
     * Object identifier of the variant set definition. Key, searched with
     * VariantSetOID. As a search term, version 2 should use a dotted decimal
     * character string; version 3 should use an object identifier. ANSI/NISO
     * Z39.50-2003 Appendix ATR, note 4.
     * @public
     * @readonly
     */
    readonly variantSet: OBJECT_IDENTIFIER;
    /**
     * @summary `name`.
     * @description
     * Name of the variant set. Brief, and not a key. ANSI/NISO Z39.50-2003
     * §3.2.10.3.15.
     * @public
     * @readonly
     */
    readonly name: InternationalString;
    /**
     * @summary `variants`.
     * @description
     * Supported classes. For each class, the supported types, and for each
     * type, the supported values. Non-brief, and mandatory in a full record.
     * ANSI/NISO Z39.50-2003 §3.2.10.3.15.
     * @public
     * @readonly
     */
    readonly variants: OPTIONAL<VariantClass[]>;

    constructor (
        commonInfo: OPTIONAL<CommonInfo>,
        variantSet: OBJECT_IDENTIFIER,
        name: InternationalString,
        variants: OPTIONAL<VariantClass[]>
    ) {
        this.commonInfo = commonInfo;
        this.variantSet = variantSet;
        this.name = name;
        this.variants = variants;
    }

    /**
     * @summary Restructures an object into a VariantSetInfo
     * @description
     * 
     * This takes an `object` and converts it to a `VariantSetInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `VariantSetInfo`.
     * @returns {VariantSetInfo}
     */
    public static _from_object (_o: { [_K in keyof (VariantSetInfo)]: (VariantSetInfo)[_K] }): VariantSetInfo {
        return new VariantSetInfo(_o.commonInfo, _o.variantSet, _o.name, _o.variants);
    }


}

/**
 * @summary The Leading Root Component Types of VariantSetInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_VariantSetInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("commonInfo", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("variantSet", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("name", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("variants", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of VariantSetInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_VariantSetInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of VariantSetInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_VariantSetInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_VariantSetInfo: $.ASN1Decoder<VariantSetInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) VariantSetInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_VariantSetInfo (el: _Element): VariantSetInfo {
    if (!_cached_decoder_for_VariantSetInfo) { _cached_decoder_for_VariantSetInfo = function (el: _Element): VariantSetInfo {
    let commonInfo: OPTIONAL<CommonInfo>;
    let variantSet!: OBJECT_IDENTIFIER;
    let name!: InternationalString;
    let variants: OPTIONAL<VariantClass[]>;
    const callbacks: $.DecodingMap = {
        "commonInfo": (_el: _Element): void => { commonInfo = $._decode_implicit<CommonInfo>(() => _decode_CommonInfo)(_el); },
        "variantSet": (_el: _Element): void => { variantSet = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "name": (_el: _Element): void => { name = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "variants": (_el: _Element): void => { variants = $._decode_implicit<VariantClass[]>(() => $._decodeSequenceOf<VariantClass>(() => _decode_VariantClass))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_VariantSetInfo,
        _extension_additions_list_spec_for_VariantSetInfo,
        _root_component_type_list_2_spec_for_VariantSetInfo,
        undefined,
    );
    return new VariantSetInfo(
        commonInfo,
        variantSet,
        name,
        variants
    );
}; }
    return _cached_decoder_for_VariantSetInfo(el);
}

let _cached_encoder_for_VariantSetInfo: $.ASN1Encoder<VariantSetInfo> | null = null;

/**
 * @summary Encodes a(n) VariantSetInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VariantSetInfo, encoded as an ASN.1 Element.
 */
export
function _encode_VariantSetInfo (value: VariantSetInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_VariantSetInfo) { _cached_encoder_for_VariantSetInfo = function (value: VariantSetInfo, elGetter: $.ASN1Encoder<VariantSetInfo>): _Element {
    const _components: _Element[] = new Array(4);
    let _components_i = 0;
    if (value.commonInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_CommonInfo, $.BER)(value.commonInfo, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeObjectIdentifier, $.BER)(value.variantSet, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_InternationalString, $.BER)(value.name, $.BER);
    if (value.variants !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<VariantClass>(() => _encode_VariantClass, $.BER), $.BER)(value.variants, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_VariantSetInfo(value, elGetter);
}


/* eslint-enable */
