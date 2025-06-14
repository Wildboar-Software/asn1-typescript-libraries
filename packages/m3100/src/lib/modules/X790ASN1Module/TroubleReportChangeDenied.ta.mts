/* eslint-disable */
import {
    OPTIONAL,
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
    ChangeDeniedReason,
    _enum_for_ChangeDeniedReason,
    _decode_ChangeDeniedReason,
    _encode_ChangeDeniedReason,
} from '../X790ASN1Module/ChangeDeniedReason.ta.mjs';
import {
    ObjectClass,
    _decode_ObjectClass,
    _encode_ObjectClass,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectClass.ta.mjs';
import {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';
/* START_OF_SYMBOL_DEFINITION TroubleReportChangeDenied */
/**
 * @summary TroubleReportChangeDenied
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TroubleReportChangeDenied ::= SEQUENCE {
 *   changeDeniedReason     ChangeDeniedReason,
 *   managedObjectClass     ObjectClass OPTIONAL,
 *   managedObjectInstance  ObjectInstance,
 *   troubleReportInstance  ObjectInstance,
 *   ...
 * }
 * ```
 *
 * @class
 */
export class TroubleReportChangeDenied {
    constructor(
        /**
         * @summary `changeDeniedReason`.
         * @public
         * @readonly
         */
        readonly changeDeniedReason: ChangeDeniedReason,
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
     * @summary Restructures an object into a TroubleReportChangeDenied
     * @description
     *
     * This takes an `object` and converts it to a `TroubleReportChangeDenied`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TroubleReportChangeDenied`.
     * @returns {TroubleReportChangeDenied}
     */
    public static _from_object(
        _o: {
            [_K in keyof TroubleReportChangeDenied]: TroubleReportChangeDenied[_K];
        }
    ): TroubleReportChangeDenied {
        return new TroubleReportChangeDenied(
            _o.changeDeniedReason,
            _o.managedObjectClass,
            _o.managedObjectInstance,
            _o.troubleReportInstance,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary The enum used as the type of the component `changeDeniedReason`
     * @public
     * @static
     */

    public static _enum_for_changeDeniedReason = _enum_for_ChangeDeniedReason;
}
/* END_OF_SYMBOL_DEFINITION TroubleReportChangeDenied */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TroubleReportChangeDenied */
/**
 * @summary The Leading Root Component Types of TroubleReportChangeDenied
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TroubleReportChangeDenied: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'changeDeniedReason',
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TroubleReportChangeDenied */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TroubleReportChangeDenied */
/**
 * @summary The Trailing Root Component Types of TroubleReportChangeDenied
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TroubleReportChangeDenied: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TroubleReportChangeDenied */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TroubleReportChangeDenied */
/**
 * @summary The Extension Addition Component Types of TroubleReportChangeDenied
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TroubleReportChangeDenied: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TroubleReportChangeDenied */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TroubleReportChangeDenied */
let _cached_decoder_for_TroubleReportChangeDenied: $.ASN1Decoder<TroubleReportChangeDenied> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TroubleReportChangeDenied */

/* START_OF_SYMBOL_DEFINITION _decode_TroubleReportChangeDenied */
/**
 * @summary Decodes an ASN.1 element into a(n) TroubleReportChangeDenied
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TroubleReportChangeDenied} The decoded data structure.
 */
export function _decode_TroubleReportChangeDenied(el: _Element) {
    if (!_cached_decoder_for_TroubleReportChangeDenied) {
        _cached_decoder_for_TroubleReportChangeDenied = function (
            el: _Element
        ): TroubleReportChangeDenied {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let changeDeniedReason!: ChangeDeniedReason;
            let managedObjectClass: OPTIONAL<ObjectClass>;
            let managedObjectInstance!: ObjectInstance;
            let troubleReportInstance!: ObjectInstance;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                changeDeniedReason: (_el: _Element): void => {
                    changeDeniedReason = _decode_ChangeDeniedReason(_el);
                },
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
                _root_component_type_list_1_spec_for_TroubleReportChangeDenied,
                _extension_additions_list_spec_for_TroubleReportChangeDenied,
                _root_component_type_list_2_spec_for_TroubleReportChangeDenied,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new TroubleReportChangeDenied /* SEQUENCE_CONSTRUCTOR_CALL */(
                changeDeniedReason,
                managedObjectClass,
                managedObjectInstance,
                troubleReportInstance,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_TroubleReportChangeDenied(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TroubleReportChangeDenied */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TroubleReportChangeDenied */
let _cached_encoder_for_TroubleReportChangeDenied: $.ASN1Encoder<TroubleReportChangeDenied> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TroubleReportChangeDenied */

/* START_OF_SYMBOL_DEFINITION _encode_TroubleReportChangeDenied */
/**
 * @summary Encodes a(n) TroubleReportChangeDenied into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TroubleReportChangeDenied, encoded as an ASN.1 Element.
 */
export function _encode_TroubleReportChangeDenied(
    value: TroubleReportChangeDenied,
    elGetter: $.ASN1Encoder<TroubleReportChangeDenied>
) {
    if (!_cached_encoder_for_TroubleReportChangeDenied) {
        _cached_encoder_for_TroubleReportChangeDenied = function (
            value: TroubleReportChangeDenied        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_ChangeDeniedReason(
                                value.changeDeniedReason,
                                $.BER
                            ),
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
    return _cached_encoder_for_TroubleReportChangeDenied(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TroubleReportChangeDenied */

/* eslint-enable */
