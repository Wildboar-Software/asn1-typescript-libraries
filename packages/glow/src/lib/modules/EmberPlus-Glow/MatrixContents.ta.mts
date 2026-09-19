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
import { EmberString, _decode_EmberString, _encode_EmberString } from "../EmberPlus-Glow/EmberString.ta.mjs";
// export { EmberString, _decode_EmberString, _encode_EmberString } from "../EmberPlus-Glow/EmberString.ta.mjs";
import { MatrixType, MatrixType_oneToN /* IMPORTED_LONG_NAMED_INTEGER */, oneToN /* IMPORTED_SHORT_NAMED_INTEGER */, MatrixType_oneToOne /* IMPORTED_LONG_NAMED_INTEGER */, oneToOne /* IMPORTED_SHORT_NAMED_INTEGER */, MatrixType_nToN /* IMPORTED_LONG_NAMED_INTEGER */, nToN /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_MatrixType, _encode_MatrixType } from "../EmberPlus-Glow/MatrixType.ta.mjs";
// export { MatrixType, MatrixType_oneToN /* IMPORTED_LONG_NAMED_INTEGER */, oneToN /* IMPORTED_SHORT_NAMED_INTEGER */, MatrixType_oneToOne /* IMPORTED_LONG_NAMED_INTEGER */, oneToOne /* IMPORTED_SHORT_NAMED_INTEGER */, MatrixType_nToN /* IMPORTED_LONG_NAMED_INTEGER */, nToN /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_MatrixType, _encode_MatrixType } from "../EmberPlus-Glow/MatrixType.ta.mjs";
import { MatrixAddressingMode, MatrixAddressingMode_linear /* IMPORTED_LONG_NAMED_INTEGER */, linear /* IMPORTED_SHORT_NAMED_INTEGER */, MatrixAddressingMode_nonLinear /* IMPORTED_LONG_NAMED_INTEGER */, nonLinear /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_MatrixAddressingMode, _encode_MatrixAddressingMode } from "../EmberPlus-Glow/MatrixAddressingMode.ta.mjs";
// export { MatrixAddressingMode, MatrixAddressingMode_linear /* IMPORTED_LONG_NAMED_INTEGER */, linear /* IMPORTED_SHORT_NAMED_INTEGER */, MatrixAddressingMode_nonLinear /* IMPORTED_LONG_NAMED_INTEGER */, nonLinear /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_MatrixAddressingMode, _encode_MatrixAddressingMode } from "../EmberPlus-Glow/MatrixAddressingMode.ta.mjs";
import { Integer32, _decode_Integer32, _encode_Integer32 } from "../EmberPlus-Glow/Integer32.ta.mjs";
// export { Integer32, _decode_Integer32, _encode_Integer32 } from "../EmberPlus-Glow/Integer32.ta.mjs";
import { ParametersLocation, _decode_ParametersLocation, _encode_ParametersLocation } from "../EmberPlus-Glow/ParametersLocation.ta.mjs";
// export { ParametersLocation, _decode_ParametersLocation, _encode_ParametersLocation } from "../EmberPlus-Glow/ParametersLocation.ta.mjs";
import { LabelCollection, _decode_LabelCollection, _encode_LabelCollection } from "../EmberPlus-Glow/LabelCollection.ta.mjs";
// export { LabelCollection, _decode_LabelCollection, _encode_LabelCollection } from "../EmberPlus-Glow/LabelCollection.ta.mjs";


/**
 * @summary MatrixContents
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MatrixContents ::= SET {
 *         identifier               [ 0] EmberString,
 *         description              [ 1] EmberString          OPTIONAL,
 *         type                     [ 2] MatrixType           OPTIONAL,
 *         addressingMode           [ 3] MatrixAddressingMode OPTIONAL,
 *         targetCount              [ 4] Integer32,                     -- linear: matrix X size; nonLinear: number of targets
 *         sourceCount              [ 5] Integer32,                     -- linear: matrix Y size; nonLinear: number of sources
 *         maximumTotalConnects     [ 6] Integer32            OPTIONAL, -- nToN: max number of set connections
 *         maximumConnectsPerTarget [ 7] Integer32            OPTIONAL, -- nToN: max number of sources connected to one target
 *         parametersLocation       [ 8] ParametersLocation   OPTIONAL,
 *         gainParameterNumber      [ 9] Integer32            OPTIONAL, -- nToN: number of connection gain parameter
 *         labels                   [10] LabelCollection      OPTIONAL,
 *         schemaIdentifiers        [11] EmberString          OPTIONAL,
 *         templateReference        [12] RELATIVE-OID OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class MatrixContents {
    constructor (
        /**
         * @summary `identifier`.
         * @public
         * @readonly
         */
        readonly identifier: EmberString,
        /**
         * @summary `description`.
         * @public
         * @readonly
         */
        readonly description: OPTIONAL<EmberString>,
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: OPTIONAL<MatrixType>,
        /**
         * @summary `addressingMode`.
         * @public
         * @readonly
         */
        readonly addressingMode: OPTIONAL<MatrixAddressingMode>,
        /**
         * @summary `targetCount`.
         * @public
         * @readonly
         */
        readonly targetCount: Integer32,
        /**
         * @summary `sourceCount`.
         * @public
         * @readonly
         */
        readonly sourceCount: Integer32,
        /**
         * @summary `maximumTotalConnects`.
         * @public
         * @readonly
         */
        readonly maximumTotalConnects: OPTIONAL<Integer32>,
        /**
         * @summary `maximumConnectsPerTarget`.
         * @public
         * @readonly
         */
        readonly maximumConnectsPerTarget: OPTIONAL<Integer32>,
        /**
         * @summary `parametersLocation`.
         * @public
         * @readonly
         */
        readonly parametersLocation: OPTIONAL<ParametersLocation>,
        /**
         * @summary `gainParameterNumber`.
         * @public
         * @readonly
         */
        readonly gainParameterNumber: OPTIONAL<Integer32>,
        /**
         * @summary `labels`.
         * @public
         * @readonly
         */
        readonly labels: OPTIONAL<LabelCollection>,
        /**
         * @summary `schemaIdentifiers`.
         * @public
         * @readonly
         */
        readonly schemaIdentifiers: OPTIONAL<EmberString>,
        /**
         * @summary `templateReference`.
         * @public
         * @readonly
         */
        readonly templateReference: OPTIONAL<RELATIVE_OID>
    ) {}

    /**
     * @summary Restructures an object into a MatrixContents
     * @description
     * 
     * This takes an `object` and converts it to a `MatrixContents`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MatrixContents`.
     * @returns {MatrixContents}
     */
    public static _from_object (_o: { [_K in keyof (MatrixContents)]: (MatrixContents)[_K] }): MatrixContents {
        return new MatrixContents(_o.identifier, _o.description, _o.type_, _o.addressingMode, _o.targetCount, _o.sourceCount, _o.maximumTotalConnects, _o.maximumConnectsPerTarget, _o.parametersLocation, _o.gainParameterNumber, _o.labels, _o.schemaIdentifiers, _o.templateReference);
    }


}

/**
 * @summary The Leading Root Component Types of MatrixContents
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MatrixContents: $.ComponentSpec[] = [
    new $.ComponentSpec("identifier", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("description", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("type", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("addressingMode", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("targetCount", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("sourceCount", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("maximumTotalConnects", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("maximumConnectsPerTarget", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("parametersLocation", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("gainParameterNumber", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("labels", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("schemaIdentifiers", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("templateReference", true, $.hasTag(_TagClass.context, 12))
];

/**
 * @summary The Trailing Root Component Types of MatrixContents
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MatrixContents: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MatrixContents
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MatrixContents: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MatrixContents: $.ASN1Decoder<MatrixContents> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MatrixContents
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MatrixContents (el: _Element): MatrixContents {
    if (!_cached_decoder_for_MatrixContents) { _cached_decoder_for_MatrixContents = function (el: _Element): MatrixContents {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let identifier!: EmberString;
    let description: OPTIONAL<EmberString>;
    let type_: OPTIONAL<MatrixType>;
    let addressingMode: OPTIONAL<MatrixAddressingMode>;
    let targetCount!: Integer32;
    let sourceCount!: Integer32;
    let maximumTotalConnects: OPTIONAL<Integer32>;
    let maximumConnectsPerTarget: OPTIONAL<Integer32>;
    let parametersLocation: OPTIONAL<ParametersLocation>;
    let gainParameterNumber: OPTIONAL<Integer32>;
    let labels: OPTIONAL<LabelCollection>;
    let schemaIdentifiers: OPTIONAL<EmberString>;
    let templateReference: OPTIONAL<RELATIVE_OID>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "identifier": (_el: _Element): void => { identifier = $._decode_explicit<EmberString>(() => _decode_EmberString)(_el); },
        "description": (_el: _Element): void => { description = $._decode_explicit<EmberString>(() => _decode_EmberString)(_el); },
        "type": (_el: _Element): void => { type_ = $._decode_explicit<MatrixType>(() => _decode_MatrixType)(_el); },
        "addressingMode": (_el: _Element): void => { addressingMode = $._decode_explicit<MatrixAddressingMode>(() => _decode_MatrixAddressingMode)(_el); },
        "targetCount": (_el: _Element): void => { targetCount = $._decode_explicit<Integer32>(() => _decode_Integer32)(_el); },
        "sourceCount": (_el: _Element): void => { sourceCount = $._decode_explicit<Integer32>(() => _decode_Integer32)(_el); },
        "maximumTotalConnects": (_el: _Element): void => { maximumTotalConnects = $._decode_explicit<Integer32>(() => _decode_Integer32)(_el); },
        "maximumConnectsPerTarget": (_el: _Element): void => { maximumConnectsPerTarget = $._decode_explicit<Integer32>(() => _decode_Integer32)(_el); },
        "parametersLocation": (_el: _Element): void => { parametersLocation = $._decode_explicit<ParametersLocation>(() => _decode_ParametersLocation)(_el); },
        "gainParameterNumber": (_el: _Element): void => { gainParameterNumber = $._decode_explicit<Integer32>(() => _decode_Integer32)(_el); },
        "labels": (_el: _Element): void => { labels = $._decode_explicit<LabelCollection>(() => _decode_LabelCollection)(_el); },
        "schemaIdentifiers": (_el: _Element): void => { schemaIdentifiers = $._decode_explicit<EmberString>(() => _decode_EmberString)(_el); },
        "templateReference": (_el: _Element): void => { templateReference = $._decode_explicit<RELATIVE_OID>(() => $._decodeRelativeOID)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_MatrixContents,
        _extension_additions_list_spec_for_MatrixContents,
        _root_component_type_list_2_spec_for_MatrixContents,
        undefined,
    );
    return new MatrixContents( /* SET_CONSTRUCTOR_CALL */
        identifier,
        description,
        type_,
        addressingMode,
        targetCount,
        sourceCount,
        maximumTotalConnects,
        maximumConnectsPerTarget,
        parametersLocation,
        gainParameterNumber,
        labels,
        schemaIdentifiers,
        templateReference
    );
}; }
    return _cached_decoder_for_MatrixContents(el);
}

let _cached_encoder_for_MatrixContents: $.ASN1Encoder<MatrixContents> | null = null;

/**
 * @summary Encodes a(n) MatrixContents into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MatrixContents, encoded as an ASN.1 Element.
 */
export
function _encode_MatrixContents (value: MatrixContents, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MatrixContents) { _cached_encoder_for_MatrixContents = function (value: MatrixContents, elGetter: $.ASN1Encoder<MatrixContents>): _Element {
    return $._encodeSet(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_EmberString, $.BER)(value.identifier, $.BER),
            /* IF_ABSENT  */ ((value.description === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_EmberString, $.BER)(value.description, $.BER)),
            /* IF_ABSENT  */ ((value.type_ === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_MatrixType, $.BER)(value.type_, $.BER)),
            /* IF_ABSENT  */ ((value.addressingMode === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => _encode_MatrixAddressingMode, $.BER)(value.addressingMode, $.BER)),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 4, () => _encode_Integer32, $.BER)(value.targetCount, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 5, () => _encode_Integer32, $.BER)(value.sourceCount, $.BER),
            /* IF_ABSENT  */ ((value.maximumTotalConnects === undefined) ? undefined : $._encode_explicit(_TagClass.context, 6, () => _encode_Integer32, $.BER)(value.maximumTotalConnects, $.BER)),
            /* IF_ABSENT  */ ((value.maximumConnectsPerTarget === undefined) ? undefined : $._encode_explicit(_TagClass.context, 7, () => _encode_Integer32, $.BER)(value.maximumConnectsPerTarget, $.BER)),
            /* IF_ABSENT  */ ((value.parametersLocation === undefined) ? undefined : $._encode_explicit(_TagClass.context, 8, () => _encode_ParametersLocation, $.BER)(value.parametersLocation, $.BER)),
            /* IF_ABSENT  */ ((value.gainParameterNumber === undefined) ? undefined : $._encode_explicit(_TagClass.context, 9, () => _encode_Integer32, $.BER)(value.gainParameterNumber, $.BER)),
            /* IF_ABSENT  */ ((value.labels === undefined) ? undefined : $._encode_explicit(_TagClass.context, 10, () => _encode_LabelCollection, $.BER)(value.labels, $.BER)),
            /* IF_ABSENT  */ ((value.schemaIdentifiers === undefined) ? undefined : $._encode_explicit(_TagClass.context, 11, () => _encode_EmberString, $.BER)(value.schemaIdentifiers, $.BER)),
            /* IF_ABSENT  */ ((value.templateReference === undefined) ? undefined : $._encode_explicit(_TagClass.context, 12, () => $._encodeRelativeOID, $.BER)(value.templateReference, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MatrixContents(value, elGetter);
}


/* eslint-enable */
