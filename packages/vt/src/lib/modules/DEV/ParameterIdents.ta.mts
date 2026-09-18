/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
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
import { CompoundRepertoireIdent, _decode_CompoundRepertoireIdent, _encode_CompoundRepertoireIdent } from "../CDS/CompoundRepertoireIdent.ta.mjs";
// export { CompoundRepertoireIdent, _decode_CompoundRepertoireIdent, _encode_CompoundRepertoireIdent } from "../CDS/CompoundRepertoireIdent.ta.mjs";
import { CompoundEmphasisIdent, _decode_CompoundEmphasisIdent, _encode_CompoundEmphasisIdent } from "../CDS/CompoundEmphasisIdent.ta.mjs";
// export { CompoundEmphasisIdent, _decode_CompoundEmphasisIdent, _encode_CompoundEmphasisIdent } from "../CDS/CompoundEmphasisIdent.ta.mjs";
import { CompoundColourIdent, _decode_CompoundColourIdent, _encode_CompoundColourIdent } from "../CDS/CompoundColourIdent.ta.mjs";
// export { CompoundColourIdent, _decode_CompoundColourIdent, _encode_CompoundColourIdent } from "../CDS/CompoundColourIdent.ta.mjs";


/**
 * @summary ParameterIdents
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParameterIdents ::= SEQUENCE {
 *     defaultCOaccess           [0]  IMPLICIT NULL OPTIONAL,
 *     defaultCOPriority         [1]  IMPLICIT NULL OPTIONAL,
 *     deviceRepertoire          [2]  IMPLICIT CDS.CompoundRepertoireIdent OPTIONAL,
 *     deviceEmphasis            [3]  IMPLICIT CDS.CompoundEmphasisIdent OPTIONAL,
 *     deviceForeground          [4]  IMPLICIT CDS.CompoundColourIdent OPTIONAL,
 *     deviceBackground          [5]  IMPLICIT CDS.CompoundColourIdent OPTIONAL,
 * -- Tags 2 to 5 above make cross referencesto the definitions in the CDS module.
 * -- Not all the components of those definitions can be used validly in this context.
 * -- In particular,the components relating to the lengths of lists (capabilities) shall not be present
 *     minimumXarrayLength       [6]  IMPLICIT NULL OPTIONAL,
 *     minimumYarrayLength       [7]  IMPLICIT NULL OPTIONAL,
 *     deviceControlObjectNames  [8]  IMPLICIT NULL OPTIONAL,
 *     deviceDisplayObjectName   [9]  IMPLICIT NULL OPTIONAL,
 *     terminationEventList      [10] IMPLICIT NULL OPTIONAL,
 *     terminationLength         [11] IMPLICIT NULL OPTIONAL,
 *     terminationTimeout        [12] IMPLICIT NULL OPTIONAL,
 *     defaultCOtrigger          [13] IMPLICIT NULL OPTIONAL,
 *     defaultCOinitialValue     [14] IMPLICIT NULL OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ParameterIdents {
    constructor (
        /**
         * @summary `defaultCOaccess`.
         * @public
         * @readonly
         */
        readonly defaultCOaccess: OPTIONAL<NULL>,
        /**
         * @summary `defaultCOPriority`.
         * @public
         * @readonly
         */
        readonly defaultCOPriority: OPTIONAL<NULL>,
        /**
         * @summary `deviceRepertoire`.
         * @public
         * @readonly
         */
        readonly deviceRepertoire: OPTIONAL<CDS.CompoundRepertoireIdent>,
        /**
         * @summary `deviceEmphasis`.
         * @public
         * @readonly
         */
        readonly deviceEmphasis: OPTIONAL<CDS.CompoundEmphasisIdent>,
        /**
         * @summary `deviceForeground`.
         * @public
         * @readonly
         */
        readonly deviceForeground: OPTIONAL<CDS.CompoundColourIdent>,
        /**
         * @summary `deviceBackground`.
         * @public
         * @readonly
         */
        readonly deviceBackground: OPTIONAL<CDS.CompoundColourIdent>,
        /**
         * @summary `minimumXarrayLength`.
         * @public
         * @readonly
         */
        readonly minimumXarrayLength: OPTIONAL<NULL>,
        /**
         * @summary `minimumYarrayLength`.
         * @public
         * @readonly
         */
        readonly minimumYarrayLength: OPTIONAL<NULL>,
        /**
         * @summary `deviceControlObjectNames`.
         * @public
         * @readonly
         */
        readonly deviceControlObjectNames: OPTIONAL<NULL>,
        /**
         * @summary `deviceDisplayObjectName`.
         * @public
         * @readonly
         */
        readonly deviceDisplayObjectName: OPTIONAL<NULL>,
        /**
         * @summary `terminationEventList`.
         * @public
         * @readonly
         */
        readonly terminationEventList: OPTIONAL<NULL>,
        /**
         * @summary `terminationLength`.
         * @public
         * @readonly
         */
        readonly terminationLength: OPTIONAL<NULL>,
        /**
         * @summary `terminationTimeout`.
         * @public
         * @readonly
         */
        readonly terminationTimeout: OPTIONAL<NULL>,
        /**
         * @summary `defaultCOtrigger`.
         * @public
         * @readonly
         */
        readonly defaultCOtrigger: OPTIONAL<NULL>,
        /**
         * @summary `defaultCOinitialValue`.
         * @public
         * @readonly
         */
        readonly defaultCOinitialValue: OPTIONAL<NULL>
    ) {}

    /**
     * @summary Restructures an object into a ParameterIdents
     * @description
     * 
     * This takes an `object` and converts it to a `ParameterIdents`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ParameterIdents`.
     * @returns {ParameterIdents}
     */
    public static _from_object (_o: { [_K in keyof (ParameterIdents)]: (ParameterIdents)[_K] }): ParameterIdents {
        return new ParameterIdents(_o.defaultCOaccess, _o.defaultCOPriority, _o.deviceRepertoire, _o.deviceEmphasis, _o.deviceForeground, _o.deviceBackground, _o.minimumXarrayLength, _o.minimumYarrayLength, _o.deviceControlObjectNames, _o.deviceDisplayObjectName, _o.terminationEventList, _o.terminationLength, _o.terminationTimeout, _o.defaultCOtrigger, _o.defaultCOinitialValue);
    }


}

/**
 * @summary The Leading Root Component Types of ParameterIdents
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ParameterIdents: $.ComponentSpec[] = [
    new $.ComponentSpec("defaultCOaccess", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("defaultCOPriority", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("deviceRepertoire", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("deviceEmphasis", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("deviceForeground", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("deviceBackground", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("minimumXarrayLength", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("minimumYarrayLength", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("deviceControlObjectNames", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("deviceDisplayObjectName", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("terminationEventList", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("terminationLength", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("terminationTimeout", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("defaultCOtrigger", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("defaultCOinitialValue", true, $.hasTag(_TagClass.context, 14))
];

/**
 * @summary The Trailing Root Component Types of ParameterIdents
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ParameterIdents: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ParameterIdents
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ParameterIdents: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ParameterIdents: $.ASN1Decoder<ParameterIdents> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ParameterIdents
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ParameterIdents (el: _Element): ParameterIdents {
    if (!_cached_decoder_for_ParameterIdents) { _cached_decoder_for_ParameterIdents = function (el: _Element): ParameterIdents {
    let defaultCOaccess: OPTIONAL<NULL>;
    let defaultCOPriority: OPTIONAL<NULL>;
    let deviceRepertoire: OPTIONAL<CDS.CompoundRepertoireIdent>;
    let deviceEmphasis: OPTIONAL<CDS.CompoundEmphasisIdent>;
    let deviceForeground: OPTIONAL<CDS.CompoundColourIdent>;
    let deviceBackground: OPTIONAL<CDS.CompoundColourIdent>;
    let minimumXarrayLength: OPTIONAL<NULL>;
    let minimumYarrayLength: OPTIONAL<NULL>;
    let deviceControlObjectNames: OPTIONAL<NULL>;
    let deviceDisplayObjectName: OPTIONAL<NULL>;
    let terminationEventList: OPTIONAL<NULL>;
    let terminationLength: OPTIONAL<NULL>;
    let terminationTimeout: OPTIONAL<NULL>;
    let defaultCOtrigger: OPTIONAL<NULL>;
    let defaultCOinitialValue: OPTIONAL<NULL>;
    const callbacks: $.DecodingMap = {
        "defaultCOaccess": (_el: _Element): void => { defaultCOaccess = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "defaultCOPriority": (_el: _Element): void => { defaultCOPriority = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "deviceRepertoire": (_el: _Element): void => { deviceRepertoire = $._decode_implicit<CDS.CompoundRepertoireIdent>(() => CDS._decode_CompoundRepertoireIdent)(_el); },
        "deviceEmphasis": (_el: _Element): void => { deviceEmphasis = $._decode_implicit<CDS.CompoundEmphasisIdent>(() => CDS._decode_CompoundEmphasisIdent)(_el); },
        "deviceForeground": (_el: _Element): void => { deviceForeground = $._decode_implicit<CDS.CompoundColourIdent>(() => CDS._decode_CompoundColourIdent)(_el); },
        "deviceBackground": (_el: _Element): void => { deviceBackground = $._decode_implicit<CDS.CompoundColourIdent>(() => CDS._decode_CompoundColourIdent)(_el); },
        "minimumXarrayLength": (_el: _Element): void => { minimumXarrayLength = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "minimumYarrayLength": (_el: _Element): void => { minimumYarrayLength = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "deviceControlObjectNames": (_el: _Element): void => { deviceControlObjectNames = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "deviceDisplayObjectName": (_el: _Element): void => { deviceDisplayObjectName = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "terminationEventList": (_el: _Element): void => { terminationEventList = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "terminationLength": (_el: _Element): void => { terminationLength = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "terminationTimeout": (_el: _Element): void => { terminationTimeout = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "defaultCOtrigger": (_el: _Element): void => { defaultCOtrigger = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "defaultCOinitialValue": (_el: _Element): void => { defaultCOinitialValue = $._decode_implicit<NULL>(() => $._decodeNull)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ParameterIdents,
        _extension_additions_list_spec_for_ParameterIdents,
        _root_component_type_list_2_spec_for_ParameterIdents,
        undefined,
    );
    return new ParameterIdents(
        defaultCOaccess,
        defaultCOPriority,
        deviceRepertoire,
        deviceEmphasis,
        deviceForeground,
        deviceBackground,
        minimumXarrayLength,
        minimumYarrayLength,
        deviceControlObjectNames,
        deviceDisplayObjectName,
        terminationEventList,
        terminationLength,
        terminationTimeout,
        defaultCOtrigger,
        defaultCOinitialValue
    );
}; }
    return _cached_decoder_for_ParameterIdents(el);
}

let _cached_encoder_for_ParameterIdents: $.ASN1Encoder<ParameterIdents> | null = null;

/**
 * @summary Encodes a(n) ParameterIdents into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ParameterIdents, encoded as an ASN.1 Element.
 */
export
function _encode_ParameterIdents (value: ParameterIdents, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ParameterIdents) { _cached_encoder_for_ParameterIdents = function (value: ParameterIdents, elGetter: $.ASN1Encoder<ParameterIdents>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.defaultCOaccess === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER)(value.defaultCOaccess, $.BER)),
            /* IF_ABSENT  */ ((value.defaultCOPriority === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER)(value.defaultCOPriority, $.BER)),
            /* IF_ABSENT  */ ((value.deviceRepertoire === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => CDS._encode_CompoundRepertoireIdent, $.BER)(value.deviceRepertoire, $.BER)),
            /* IF_ABSENT  */ ((value.deviceEmphasis === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => CDS._encode_CompoundEmphasisIdent, $.BER)(value.deviceEmphasis, $.BER)),
            /* IF_ABSENT  */ ((value.deviceForeground === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => CDS._encode_CompoundColourIdent, $.BER)(value.deviceForeground, $.BER)),
            /* IF_ABSENT  */ ((value.deviceBackground === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => CDS._encode_CompoundColourIdent, $.BER)(value.deviceBackground, $.BER)),
            /* IF_ABSENT  */ ((value.minimumXarrayLength === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeNull, $.BER)(value.minimumXarrayLength, $.BER)),
            /* IF_ABSENT  */ ((value.minimumYarrayLength === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => $._encodeNull, $.BER)(value.minimumYarrayLength, $.BER)),
            /* IF_ABSENT  */ ((value.deviceControlObjectNames === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => $._encodeNull, $.BER)(value.deviceControlObjectNames, $.BER)),
            /* IF_ABSENT  */ ((value.deviceDisplayObjectName === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => $._encodeNull, $.BER)(value.deviceDisplayObjectName, $.BER)),
            /* IF_ABSENT  */ ((value.terminationEventList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => $._encodeNull, $.BER)(value.terminationEventList, $.BER)),
            /* IF_ABSENT  */ ((value.terminationLength === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => $._encodeNull, $.BER)(value.terminationLength, $.BER)),
            /* IF_ABSENT  */ ((value.terminationTimeout === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => $._encodeNull, $.BER)(value.terminationTimeout, $.BER)),
            /* IF_ABSENT  */ ((value.defaultCOtrigger === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => $._encodeNull, $.BER)(value.defaultCOtrigger, $.BER)),
            /* IF_ABSENT  */ ((value.defaultCOinitialValue === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => $._encodeNull, $.BER)(value.defaultCOinitialValue, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ParameterIdents(value, elGetter);
}


/* eslint-enable */
