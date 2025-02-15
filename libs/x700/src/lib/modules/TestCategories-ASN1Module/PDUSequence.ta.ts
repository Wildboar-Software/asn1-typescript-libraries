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
import * as $ from 'asn1-ts/dist/node/functional';
import {
    PDUType,
    _decode_PDUType,
    _encode_PDUType,
} from '../TestCategories-ASN1Module/PDUType.ta';
export {
    PDUType,
    _decode_PDUType,
    _encode_PDUType,
} from '../TestCategories-ASN1Module/PDUType.ta';
import {
    Parameter,
    _decode_Parameter,
    _encode_Parameter,
} from '../TestCategories-ASN1Module/Parameter.ta';
export {
    Parameter,
    _decode_Parameter,
    _encode_Parameter,
} from '../TestCategories-ASN1Module/Parameter.ta';
import {
    ContCond,
    _decode_ContCond,
    _encode_ContCond,
} from '../TestCategories-ASN1Module/ContCond.ta';
export {
    ContCond,
    _decode_ContCond,
    _encode_ContCond,
} from '../TestCategories-ASN1Module/ContCond.ta';
import {
    WaitDuration,
    _decode_WaitDuration,
    _encode_WaitDuration,
} from '../TestCategories-ASN1Module/WaitDuration.ta';
export {
    WaitDuration,
    _decode_WaitDuration,
    _encode_WaitDuration,
} from '../TestCategories-ASN1Module/WaitDuration.ta';

/* START_OF_SYMBOL_DEFINITION PDUSequence */
/**
 * @summary PDUSequence
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PDUSequence ::= SEQUENCE {
 *   pDUType       PDUType,
 *   parameter     Parameter,
 *   contCond      ContCond,
 *   waitDuration  WaitDuration OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class PDUSequence {
    constructor(
        /**
         * @summary `pDUType`.
         * @public
         * @readonly
         */
        readonly pDUType: PDUType,
        /**
         * @summary `parameter`.
         * @public
         * @readonly
         */
        readonly parameter: Parameter,
        /**
         * @summary `contCond`.
         * @public
         * @readonly
         */
        readonly contCond: ContCond,
        /**
         * @summary `waitDuration`.
         * @public
         * @readonly
         */
        readonly waitDuration: OPTIONAL<WaitDuration>
    ) {}

    /**
     * @summary Restructures an object into a PDUSequence
     * @description
     *
     * This takes an `object` and converts it to a `PDUSequence`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PDUSequence`.
     * @returns {PDUSequence}
     */
    public static _from_object(
        _o: { [_K in keyof PDUSequence]: PDUSequence[_K] }
    ): PDUSequence {
        return new PDUSequence(
            _o.pDUType,
            _o.parameter,
            _o.contCond,
            _o.waitDuration
        );
    }
}
/* END_OF_SYMBOL_DEFINITION PDUSequence */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PDUSequence */
/**
 * @summary The Leading Root Component Types of PDUSequence
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PDUSequence: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'pDUType',
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'parameter',
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec('contCond', false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        'waitDuration',
        true,
        $.hasAnyTag,
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PDUSequence */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PDUSequence */
/**
 * @summary The Trailing Root Component Types of PDUSequence
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PDUSequence: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PDUSequence */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PDUSequence */
/**
 * @summary The Extension Addition Component Types of PDUSequence
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PDUSequence: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PDUSequence */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PDUSequence */
let _cached_decoder_for_PDUSequence: $.ASN1Decoder<PDUSequence> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PDUSequence */

/* START_OF_SYMBOL_DEFINITION _decode_PDUSequence */
/**
 * @summary Decodes an ASN.1 element into a(n) PDUSequence
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PDUSequence} The decoded data structure.
 */
export function _decode_PDUSequence(el: _Element) {
    if (!_cached_decoder_for_PDUSequence) {
        _cached_decoder_for_PDUSequence = function (el: _Element): PDUSequence {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let pDUType!: PDUType;
            let parameter!: Parameter;
            let contCond!: ContCond;
            let waitDuration: OPTIONAL<WaitDuration>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                pDUType: (_el: _Element): void => {
                    pDUType = _decode_PDUType(_el);
                },
                parameter: (_el: _Element): void => {
                    parameter = _decode_Parameter(_el);
                },
                contCond: (_el: _Element): void => {
                    contCond = _decode_ContCond(_el);
                },
                waitDuration: (_el: _Element): void => {
                    waitDuration = _decode_WaitDuration(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PDUSequence,
                _extension_additions_list_spec_for_PDUSequence,
                _root_component_type_list_2_spec_for_PDUSequence,
                undefined
            );
            return new PDUSequence /* SEQUENCE_CONSTRUCTOR_CALL */(
                pDUType,
                parameter,
                contCond,
                waitDuration
            );
        };
    }
    return _cached_decoder_for_PDUSequence(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PDUSequence */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PDUSequence */
let _cached_encoder_for_PDUSequence: $.ASN1Encoder<PDUSequence> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PDUSequence */

/* START_OF_SYMBOL_DEFINITION _encode_PDUSequence */
/**
 * @summary Encodes a(n) PDUSequence into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PDUSequence, encoded as an ASN.1 Element.
 */
export function _encode_PDUSequence(
    value: PDUSequence,
    elGetter: $.ASN1Encoder<PDUSequence>
) {
    if (!_cached_encoder_for_PDUSequence) {
        _cached_encoder_for_PDUSequence = function (
            value: PDUSequence,
            elGetter: $.ASN1Encoder<PDUSequence>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_PDUType(value.pDUType, $.BER),
                        /* REQUIRED   */ _encode_Parameter(
                            value.parameter,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_ContCond(
                            value.contCond,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.waitDuration === undefined
                            ? undefined
                            : _encode_WaitDuration(value.waitDuration, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_PDUSequence(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PDUSequence */

/* eslint-enable */
