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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    ObjectClass,
    _decode_ObjectClass,
    _encode_ObjectClass,
} from '@wildboar/cmip';
import {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip';

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
        $.hasAnyTag
    ),
    new $.ComponentSpec(
        'managedObjectInstance',
        false,
        $.hasAnyTag
    ),
    new $.ComponentSpec(
        'troubleReportInstance',
        false,
        $.hasAnyTag
    ),
];


/**
 * @summary The Trailing Root Component Types of TroubleReportAlreadyExists
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TroubleReportAlreadyExists: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of TroubleReportAlreadyExists
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TroubleReportAlreadyExists: $.ComponentSpec[] = [];


let _cached_decoder_for_TroubleReportAlreadyExists: $.ASN1Decoder<TroubleReportAlreadyExists> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) TroubleReportAlreadyExists
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TroubleReportAlreadyExists} The decoded data structure.
 */
export function _decode_TroubleReportAlreadyExists(el: _Element): TroubleReportAlreadyExists {
    if (!_cached_decoder_for_TroubleReportAlreadyExists) {
        _cached_decoder_for_TroubleReportAlreadyExists = function (
            el: _Element
        ): TroubleReportAlreadyExists {
            let managedObjectClass: OPTIONAL<ObjectClass>;
            let managedObjectInstance!: ObjectInstance;
            let troubleReportInstance!: ObjectInstance;
            let _unrecognizedExtensionsList: _Element[] = [];
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
            return new TroubleReportAlreadyExists (
                managedObjectClass,
                managedObjectInstance,
                troubleReportInstance,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_TroubleReportAlreadyExists(el);
}


let _cached_encoder_for_TroubleReportAlreadyExists: $.ASN1Encoder<TroubleReportAlreadyExists> | null = null;


/**
 * @summary Encodes a(n) TroubleReportAlreadyExists into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TroubleReportAlreadyExists, encoded as an ASN.1 Element.
 */
export function _encode_TroubleReportAlreadyExists(
    value: TroubleReportAlreadyExists,
    elGetter: $.ASN1Encoder<TroubleReportAlreadyExists>
): _Element {
    if (!_cached_encoder_for_TroubleReportAlreadyExists) {
        _cached_encoder_for_TroubleReportAlreadyExists = function (
            value: TroubleReportAlreadyExists        ): _Element {
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


/* eslint-enable */
