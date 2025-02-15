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
    ObjectClass,
    _decode_ObjectClass,
    _encode_ObjectClass,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectClass.ta';
export {
    ObjectClass,
    _decode_ObjectClass,
    _encode_ObjectClass,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectClass.ta';
import {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta';
export {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta';

/* START_OF_SYMBOL_DEFINITION TroubleReportAlreadyExists */
/**
 * @summary TroubleReportAlreadyExists
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TroubleReportAlreadyExists ::= SEQUENCE {
 *   managedObjectClass     ObjectClass OPTIONAL,
 *   managedObjectInstance  ObjectInstance,
 *   troubleReportInstance  ObjectInstance,
 *   ...
 * }
 * ```
 *
 * @class
 */
export class TroubleReportAlreadyExists {
    constructor(
        /**
         * @summary `managedObjectClass`.
         * @public
         * @readonly
         */
        readonly managedObjectClass: OPTIONAL<ObjectClass>,
        /**
         * @summary `managedObjectInstance`.
         * @public
         * @readonly
         */
        readonly managedObjectInstance: ObjectInstance,
        /**
         * @summary `troubleReportInstance`.
         * @public
         * @readonly
         */
        readonly troubleReportInstance: ObjectInstance,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a TroubleReportAlreadyExists
     * @description
     *
     * This takes an `object` and converts it to a `TroubleReportAlreadyExists`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TroubleReportAlreadyExists`.
     * @returns {TroubleReportAlreadyExists}
     */
    public static _from_object(
        _o: {
            [_K in keyof TroubleReportAlreadyExists]: TroubleReportAlreadyExists[_K];
        }
    ): TroubleReportAlreadyExists {
        return new TroubleReportAlreadyExists(
            _o.managedObjectClass,
            _o.managedObjectInstance,
            _o.troubleReportInstance,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION TroubleReportAlreadyExists */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TroubleReportAlreadyExists */
/**
 * @summary The Leading Root Component Types of TroubleReportAlreadyExists
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TroubleReportAlreadyExists: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'managedObjectClass',
        true,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'managedObjectInstance',
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'troubleReportInstance',
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TroubleReportAlreadyExists */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TroubleReportAlreadyExists */
/**
 * @summary The Trailing Root Component Types of TroubleReportAlreadyExists
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TroubleReportAlreadyExists: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TroubleReportAlreadyExists */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TroubleReportAlreadyExists */
/**
 * @summary The Extension Addition Component Types of TroubleReportAlreadyExists
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TroubleReportAlreadyExists: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TroubleReportAlreadyExists */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TroubleReportAlreadyExists */
let _cached_decoder_for_TroubleReportAlreadyExists: $.ASN1Decoder<TroubleReportAlreadyExists> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TroubleReportAlreadyExists */

/* START_OF_SYMBOL_DEFINITION _decode_TroubleReportAlreadyExists */
/**
 * @summary Decodes an ASN.1 element into a(n) TroubleReportAlreadyExists
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TroubleReportAlreadyExists} The decoded data structure.
 */
export function _decode_TroubleReportAlreadyExists(el: _Element) {
    if (!_cached_decoder_for_TroubleReportAlreadyExists) {
        _cached_decoder_for_TroubleReportAlreadyExists = function (
            el: _Element
        ): TroubleReportAlreadyExists {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let managedObjectClass: OPTIONAL<ObjectClass>;
            let managedObjectInstance!: ObjectInstance;
            let troubleReportInstance!: ObjectInstance;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                managedObjectClass: (_el: _Element): void => {
                    managedObjectClass = _decode_ObjectClass(_el);
                },
                managedObjectInstance: (_el: _Element): void => {
                    managedObjectInstance = _decode_ObjectInstance(_el);
                },
                troubleReportInstance: (_el: _Element): void => {
                    troubleReportInstance = _decode_ObjectInstance(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TroubleReportAlreadyExists,
                _extension_additions_list_spec_for_TroubleReportAlreadyExists,
                _root_component_type_list_2_spec_for_TroubleReportAlreadyExists,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new TroubleReportAlreadyExists /* SEQUENCE_CONSTRUCTOR_CALL */(
                managedObjectClass,
                managedObjectInstance,
                troubleReportInstance,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_TroubleReportAlreadyExists(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TroubleReportAlreadyExists */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TroubleReportAlreadyExists */
let _cached_encoder_for_TroubleReportAlreadyExists: $.ASN1Encoder<TroubleReportAlreadyExists> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TroubleReportAlreadyExists */

/* START_OF_SYMBOL_DEFINITION _encode_TroubleReportAlreadyExists */
/**
 * @summary Encodes a(n) TroubleReportAlreadyExists into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TroubleReportAlreadyExists, encoded as an ASN.1 Element.
 */
export function _encode_TroubleReportAlreadyExists(
    value: TroubleReportAlreadyExists,
    elGetter: $.ASN1Encoder<TroubleReportAlreadyExists>
) {
    if (!_cached_encoder_for_TroubleReportAlreadyExists) {
        _cached_encoder_for_TroubleReportAlreadyExists = function (
            value: TroubleReportAlreadyExists,
            elGetter: $.ASN1Encoder<TroubleReportAlreadyExists>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.managedObjectClass ===
                            undefined
                                ? undefined
                                : _encode_ObjectClass(
                                      value.managedObjectClass,
                                      $.BER
                                  ),
                            /* REQUIRED   */ _encode_ObjectInstance(
                                value.managedObjectInstance,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_ObjectInstance(
                                value.troubleReportInstance,
                                $.BER
                            ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_TroubleReportAlreadyExists(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TroubleReportAlreadyExists */

/* eslint-enable */
