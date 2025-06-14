/* eslint-disable */
import {
    OPTIONAL,
    INTEGER,
    OBJECT_IDENTIFIER,
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
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';
/* START_OF_SYMBOL_DEFINITION SuspectObject */
/**
 * @summary SuspectObject
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SuspectObject ::= SEQUENCE {
 *   suspectObjectClass     OBJECT IDENTIFIER,
 *   suspectObjectInstance  ObjectInstance,
 *   failureProbability     INTEGER OPTIONAL,
 *   -- in the range 1-100
 *   ...
 * }
 * ```
 *
 * @class
 */
export class SuspectObject {
    constructor(
        /**
         * @summary `suspectObjectClass`.
         * @public
         * @readonly
         */
        readonly suspectObjectClass: OBJECT_IDENTIFIER,
        /**
         * @summary `suspectObjectInstance`.
         * @public
         * @readonly
         */
        readonly suspectObjectInstance: ObjectInstance,
        /**
         * @summary `failureProbability`.
         * @public
         * @readonly
         */
        readonly failureProbability: OPTIONAL<INTEGER>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SuspectObject
     * @description
     *
     * This takes an `object` and converts it to a `SuspectObject`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SuspectObject`.
     * @returns {SuspectObject}
     */
    public static _from_object(
        _o: { [_K in keyof SuspectObject]: SuspectObject[_K] }
    ): SuspectObject {
        return new SuspectObject(
            _o.suspectObjectClass,
            _o.suspectObjectInstance,
            _o.failureProbability,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION SuspectObject */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SuspectObject */
/**
 * @summary The Leading Root Component Types of SuspectObject
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SuspectObject: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'suspectObjectClass',
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'suspectObjectInstance',
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'failureProbability',
        true,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SuspectObject */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SuspectObject */
/**
 * @summary The Trailing Root Component Types of SuspectObject
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SuspectObject: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SuspectObject */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SuspectObject */
/**
 * @summary The Extension Addition Component Types of SuspectObject
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SuspectObject: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SuspectObject */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SuspectObject */
let _cached_decoder_for_SuspectObject: $.ASN1Decoder<SuspectObject> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SuspectObject */

/* START_OF_SYMBOL_DEFINITION _decode_SuspectObject */
/**
 * @summary Decodes an ASN.1 element into a(n) SuspectObject
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SuspectObject} The decoded data structure.
 */
export function _decode_SuspectObject(el: _Element) {
    if (!_cached_decoder_for_SuspectObject) {
        _cached_decoder_for_SuspectObject = function (
            el: _Element
        ): SuspectObject {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let suspectObjectClass!: OBJECT_IDENTIFIER;
            let suspectObjectInstance!: ObjectInstance;
            let failureProbability: OPTIONAL<INTEGER>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                suspectObjectClass: (_el: _Element): void => {
                    suspectObjectClass = $._decodeObjectIdentifier(_el);
                },
                suspectObjectInstance: (_el: _Element): void => {
                    suspectObjectInstance = _decode_ObjectInstance(_el);
                },
                failureProbability: (_el: _Element): void => {
                    failureProbability = $._decodeInteger(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SuspectObject,
                _extension_additions_list_spec_for_SuspectObject,
                _root_component_type_list_2_spec_for_SuspectObject,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new SuspectObject /* SEQUENCE_CONSTRUCTOR_CALL */(
                suspectObjectClass,
                suspectObjectInstance,
                failureProbability,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_SuspectObject(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SuspectObject */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SuspectObject */
let _cached_encoder_for_SuspectObject: $.ASN1Encoder<SuspectObject> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SuspectObject */

/* START_OF_SYMBOL_DEFINITION _encode_SuspectObject */
/**
 * @summary Encodes a(n) SuspectObject into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SuspectObject, encoded as an ASN.1 Element.
 */
export function _encode_SuspectObject(
    value: SuspectObject,
    elGetter: $.ASN1Encoder<SuspectObject>
) {
    if (!_cached_encoder_for_SuspectObject) {
        _cached_encoder_for_SuspectObject = function (
            value: SuspectObject        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.suspectObjectClass,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_ObjectInstance(
                                value.suspectObjectInstance,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.failureProbability ===
                            undefined
                                ? undefined
                                : $._encodeInteger(
                                      value.failureProbability,
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
    return _cached_encoder_for_SuspectObject(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SuspectObject */

/* eslint-enable */
