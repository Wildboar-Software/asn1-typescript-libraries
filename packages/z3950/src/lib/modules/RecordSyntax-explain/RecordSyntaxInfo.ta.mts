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
import { HumanString, _decode_HumanString, _encode_HumanString } from "../RecordSyntax-explain/HumanString.ta.mjs";
import { ElementInfo, _decode_ElementInfo, _encode_ElementInfo } from "../RecordSyntax-explain/ElementInfo.ta.mjs";


/**
 * @summary RecordSyntaxInfo
 * @description
 * Descriptive information about one abstract record syntax. There is one
 * Explain record for each abstract record syntax the server supports. It is not
 * specific to a database. The description should match the syntax's definition;
 * the server may omit items it does not support. ANSI/NISO Z39.50-2003
 * §3.2.10.3.5; ASN.1 comment 1.
 * 
 * Search with ExplainCategory `RecordSyntaxInfo` and RecordSyntaxOID. The
 * search may also use HumanStringLanguage, DateAdded, DateChanged, or
 * DateExpires. ANSI/NISO Z39.50-2003 §3.2.10.1.2 and §3.2.10.1.3. As a search
 * term, version 2 should use a dotted decimal character string; version 3
 * should use an object identifier. ANSI/NISO Z39.50-2003 Appendix ATR, note 4.
 * 
 * Element set `B` retrieves brief elements; `F` adds non-brief elements.
 * Some components marked optional are mandatory in a full record. ANSI/NISO
 * Z39.50-2003 ASN.1 comment 1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RecordSyntaxInfo ::= SEQUENCE {
 *     commonInfo          [0] IMPLICIT CommonInfo OPTIONAL,
 *     -- Key elements follow:
 *     recordSyntax        [1] IMPLICIT OBJECT IDENTIFIER,
 *     -- Non-key brief elements follow:
 *     name                [2] IMPLICIT InternationalString,
 *     -- Non-brief elements follow:
 *     transferSyntaxes    [3] IMPLICIT SEQUENCE OF OBJECT IDENTIFIER OPTIONAL,
 *     description         [4] IMPLICIT HumanString OPTIONAL,
 *     asn1Module          [5] IMPLICIT InternationalString OPTIONAL,
 *     abstractStructure   [6] IMPLICIT SEQUENCE OF ElementInfo OPTIONAL
 *     -- Omitting abstractStructure only means server isn't using Explain
 *     -- to describe the structure, not that there is no structure
 * }
 * ```
 * 
 * @class
 */
export
class RecordSyntaxInfo {
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
     * @summary `recordSyntax`.
     * @description
     * Object identifier of the abstract record syntax. Key, searched with
     * RecordSyntaxOID. As a search term, version 2 should use a dotted decimal
     * character string; version 3 should use an object identifier. ANSI/NISO
     * Z39.50-2003 Appendix ATR, note 4.
     * @public
     * @readonly
     */
    readonly recordSyntax: OBJECT_IDENTIFIER;
    /**
     * @summary `name`.
     * @description
     * A name by which this syntax is known. Brief, and not a key. ANSI/NISO
     * Z39.50-2003 §3.2.10.3.5.
     * @public
     * @readonly
     */
    readonly name: InternationalString;
    /**
     * @summary `transferSyntaxes`.
     * @description
     * Transfer syntaxes supported for this abstract syntax, by object
     * identifier. Non-brief. ANSI/NISO Z39.50-2003 §3.2.10.3.5.
     * @public
     * @readonly
     */
    readonly transferSyntaxes: OPTIONAL<OBJECT_IDENTIFIER[]>;
    /**
     * @summary `description`.
     * @description
     * Description of this abstract record syntax, in human-readable text.
     * Non-brief. ANSI/NISO Z39.50-2003 §3.2.10.3.5.
     * @public
     * @readonly
     */
    readonly description: OPTIONAL<HumanString>;
    /**
     * @summary `asn1Module`.
     * @description
     * An ASN.1 module describing the syntax. Non-brief. ANSI/NISO Z39.50-2003
     * §3.2.10.3.5.
     * @public
     * @readonly
     */
    readonly asn1Module: OPTIONAL<InternationalString>;
    /**
     * @summary `abstractStructure`.
     * @description
     * The record structure defined by this syntax. Omitting it means only that
     * the server is not using Explain to describe the structure, not that the
     * syntax has no structure. Non-brief. ANSI/NISO Z39.50-2003 §3.2.10.3.5.
     * @public
     * @readonly
     */
    readonly abstractStructure: OPTIONAL<ElementInfo[]>;

    constructor (
        commonInfo: OPTIONAL<CommonInfo>,
        recordSyntax: OBJECT_IDENTIFIER,
        name: InternationalString,
        transferSyntaxes: OPTIONAL<OBJECT_IDENTIFIER[]>,
        description: OPTIONAL<HumanString>,
        asn1Module: OPTIONAL<InternationalString>,
        abstractStructure: OPTIONAL<ElementInfo[]>
    ) {
        this.commonInfo = commonInfo;
        this.recordSyntax = recordSyntax;
        this.name = name;
        this.transferSyntaxes = transferSyntaxes;
        this.description = description;
        this.asn1Module = asn1Module;
        this.abstractStructure = abstractStructure;
    }

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
    new $.ComponentSpec("name", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("transferSyntaxes", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("description", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("asn1Module", true, $.hasTag(_TagClass.context, 5)),
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
    const _components: _Element[] = new Array(7);
    let _components_i = 0;
    if (value.commonInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_CommonInfo, $.BER)(value.commonInfo, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeObjectIdentifier, $.BER)(value.recordSyntax, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_InternationalString, $.BER)(value.name, $.BER);
    if (value.transferSyntaxes !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<OBJECT_IDENTIFIER>(() => $._encodeObjectIdentifier, $.BER), $.BER)(value.transferSyntaxes, $.BER);
    }
    if (value.description !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_HumanString, $.BER)(value.description, $.BER);
    }
    if (value.asn1Module !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_InternationalString, $.BER)(value.asn1Module, $.BER);
    }
    if (value.abstractStructure !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeSequenceOf<ElementInfo>(() => _encode_ElementInfo, $.BER), $.BER)(value.abstractStructure, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_RecordSyntaxInfo(value, elGetter);
}


/* eslint-enable */
