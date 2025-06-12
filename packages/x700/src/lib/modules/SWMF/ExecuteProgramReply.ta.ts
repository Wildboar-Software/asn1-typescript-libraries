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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    Identity,
    _decode_Identity,
    _encode_Identity,
} from '../SWMF/Identity.ta.js';
export {
    Identity,
    _decode_Identity,
    _encode_Identity,
} from '../SWMF/Identity.ta.js';
import {
    ManagementExtension,
    _decode_ManagementExtension,
    _encode_ManagementExtension,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ManagementExtension.ta.js';
export {
    ManagementExtension,
    _decode_ManagementExtension,
    _encode_ManagementExtension,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ManagementExtension.ta.js';

/* START_OF_SYMBOL_DEFINITION ExecuteProgramReply */
/**
 * @summary ExecuteProgramReply
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExecuteProgramReply ::= SEQUENCE {
 *   processId       INTEGER,
 *   processOwner    Identity,
 *   startTime       GeneralizedTime,
 *   additionalInfo  SET OF ManagementExtension OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class ExecuteProgramReply {
    constructor(
        /**
         * @summary `processId`.
         * @public
         * @readonly
         */
        readonly processId: INTEGER,
        /**
         * @summary `processOwner`.
         * @public
         * @readonly
         */
        readonly processOwner: Identity,
        /**
         * @summary `startTime`.
         * @public
         * @readonly
         */
        readonly startTime: GeneralizedTime,
        /**
         * @summary `additionalInfo`.
         * @public
         * @readonly
         */
        readonly additionalInfo: OPTIONAL<ManagementExtension[]>
    ) {}

    /**
     * @summary Restructures an object into a ExecuteProgramReply
     * @description
     *
     * This takes an `object` and converts it to a `ExecuteProgramReply`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ExecuteProgramReply`.
     * @returns {ExecuteProgramReply}
     */
    public static _from_object(
        _o: { [_K in keyof ExecuteProgramReply]: ExecuteProgramReply[_K] }
    ): ExecuteProgramReply {
        return new ExecuteProgramReply(
            _o.processId,
            _o.processOwner,
            _o.startTime,
            _o.additionalInfo
        );
    }
}
/* END_OF_SYMBOL_DEFINITION ExecuteProgramReply */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ExecuteProgramReply */
/**
 * @summary The Leading Root Component Types of ExecuteProgramReply
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ExecuteProgramReply: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'processId',
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'processOwner',
        false,
        $.hasTag(_TagClass.universal, 25),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'startTime',
        false,
        $.hasTag(_TagClass.universal, 24),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'additionalInfo',
        true,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ExecuteProgramReply */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ExecuteProgramReply */
/**
 * @summary The Trailing Root Component Types of ExecuteProgramReply
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ExecuteProgramReply: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ExecuteProgramReply */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ExecuteProgramReply */
/**
 * @summary The Extension Addition Component Types of ExecuteProgramReply
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ExecuteProgramReply: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ExecuteProgramReply */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ExecuteProgramReply */
let _cached_decoder_for_ExecuteProgramReply: $.ASN1Decoder<ExecuteProgramReply> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ExecuteProgramReply */

/* START_OF_SYMBOL_DEFINITION _decode_ExecuteProgramReply */
/**
 * @summary Decodes an ASN.1 element into a(n) ExecuteProgramReply
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExecuteProgramReply} The decoded data structure.
 */
export function _decode_ExecuteProgramReply(el: _Element) {
    if (!_cached_decoder_for_ExecuteProgramReply) {
        _cached_decoder_for_ExecuteProgramReply = function (
            el: _Element
        ): ExecuteProgramReply {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let processId!: INTEGER;
            let processOwner!: Identity;
            let startTime!: GeneralizedTime;
            let additionalInfo: OPTIONAL<ManagementExtension[]>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                processId: (_el: _Element): void => {
                    processId = $._decodeInteger(_el);
                },
                processOwner: (_el: _Element): void => {
                    processOwner = _decode_Identity(_el);
                },
                startTime: (_el: _Element): void => {
                    startTime = $._decodeGeneralizedTime(_el);
                },
                additionalInfo: (_el: _Element): void => {
                    additionalInfo = $._decodeSetOf<ManagementExtension>(
                        () => _decode_ManagementExtension
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ExecuteProgramReply,
                _extension_additions_list_spec_for_ExecuteProgramReply,
                _root_component_type_list_2_spec_for_ExecuteProgramReply,
                undefined
            );
            return new ExecuteProgramReply /* SEQUENCE_CONSTRUCTOR_CALL */(
                processId,
                processOwner,
                startTime,
                additionalInfo
            );
        };
    }
    return _cached_decoder_for_ExecuteProgramReply(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ExecuteProgramReply */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ExecuteProgramReply */
let _cached_encoder_for_ExecuteProgramReply: $.ASN1Encoder<ExecuteProgramReply> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ExecuteProgramReply */

/* START_OF_SYMBOL_DEFINITION _encode_ExecuteProgramReply */
/**
 * @summary Encodes a(n) ExecuteProgramReply into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExecuteProgramReply, encoded as an ASN.1 Element.
 */
export function _encode_ExecuteProgramReply(
    value: ExecuteProgramReply,
    elGetter: $.ASN1Encoder<ExecuteProgramReply>
) {
    if (!_cached_encoder_for_ExecuteProgramReply) {
        _cached_encoder_for_ExecuteProgramReply = function (
            value: ExecuteProgramReply,
            elGetter: $.ASN1Encoder<ExecuteProgramReply>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeInteger(
                            value.processId,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_Identity(
                            value.processOwner,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeGeneralizedTime(
                            value.startTime,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.additionalInfo === undefined
                            ? undefined
                            : $._encodeSetOf<ManagementExtension>(
                                  () => _encode_ManagementExtension,
                                  $.BER
                              )(value.additionalInfo, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ExecuteProgramReply(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ExecuteProgramReply */

/* eslint-enable */
