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
    SystemTiming_sourceType,
    _enum_for_SystemTiming_sourceType,
    _decode_SystemTiming_sourceType,
    _encode_SystemTiming_sourceType,
} from '../ASN1DefinedTypesModule/SystemTiming-sourceType.ta.mjs';
import {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';
/* START_OF_SYMBOL_DEFINITION SystemTiming */
/**
 * @summary SystemTiming
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SystemTiming ::= SEQUENCE {
 *   sourceType
 *     ENUMERATED {internalTimingSource(0), remoteTimingSource(1),
 *                 slavedTimingTerminationSignal(2)},
 *   sourceID    ObjectInstance OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class SystemTiming {
    constructor(
        /**
         * @summary `sourceType`.
         * @public
         * @readonly
         */
        readonly sourceType: SystemTiming_sourceType,
        /**
         * @summary `sourceID`.
         * @public
         * @readonly
         */
        readonly sourceID: OPTIONAL<ObjectInstance>
    ) {}

    /**
     * @summary Restructures an object into a SystemTiming
     * @description
     *
     * This takes an `object` and converts it to a `SystemTiming`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SystemTiming`.
     * @returns {SystemTiming}
     */
    public static _from_object(
        _o: { [_K in keyof SystemTiming]: SystemTiming[_K] }
    ): SystemTiming {
        return new SystemTiming(_o.sourceType, _o.sourceID);
    }

    /**
     * @summary The enum used as the type of the component `sourceType`
     * @public
     * @static
     */

    public static _enum_for_sourceType = _enum_for_SystemTiming_sourceType;
}
/* END_OF_SYMBOL_DEFINITION SystemTiming */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SystemTiming */
/**
 * @summary The Leading Root Component Types of SystemTiming
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SystemTiming: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'sourceType',
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec('sourceID', true, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SystemTiming */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SystemTiming */
/**
 * @summary The Trailing Root Component Types of SystemTiming
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SystemTiming: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SystemTiming */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SystemTiming */
/**
 * @summary The Extension Addition Component Types of SystemTiming
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SystemTiming: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SystemTiming */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SystemTiming */
let _cached_decoder_for_SystemTiming: $.ASN1Decoder<SystemTiming> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SystemTiming */

/* START_OF_SYMBOL_DEFINITION _decode_SystemTiming */
/**
 * @summary Decodes an ASN.1 element into a(n) SystemTiming
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SystemTiming} The decoded data structure.
 */
export function _decode_SystemTiming(el: _Element) {
    if (!_cached_decoder_for_SystemTiming) {
        _cached_decoder_for_SystemTiming = function (
            el: _Element
        ): SystemTiming {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let sourceType!: SystemTiming_sourceType;
            let sourceID: OPTIONAL<ObjectInstance>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                sourceType: (_el: _Element): void => {
                    sourceType = _decode_SystemTiming_sourceType(_el);
                },
                sourceID: (_el: _Element): void => {
                    sourceID = _decode_ObjectInstance(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SystemTiming,
                _extension_additions_list_spec_for_SystemTiming,
                _root_component_type_list_2_spec_for_SystemTiming,
                undefined
            );
            return new SystemTiming /* SEQUENCE_CONSTRUCTOR_CALL */(
                sourceType,
                sourceID
            );
        };
    }
    return _cached_decoder_for_SystemTiming(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SystemTiming */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SystemTiming */
let _cached_encoder_for_SystemTiming: $.ASN1Encoder<SystemTiming> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SystemTiming */

/* START_OF_SYMBOL_DEFINITION _encode_SystemTiming */
/**
 * @summary Encodes a(n) SystemTiming into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SystemTiming, encoded as an ASN.1 Element.
 */
export function _encode_SystemTiming(
    value: SystemTiming,
    elGetter: $.ASN1Encoder<SystemTiming>
) {
    if (!_cached_encoder_for_SystemTiming) {
        _cached_encoder_for_SystemTiming = function (
            value: SystemTiming        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_SystemTiming_sourceType(
                            value.sourceType,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.sourceID === undefined
                            ? undefined
                            : _encode_ObjectInstance(value.sourceID, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SystemTiming(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SystemTiming */

/* eslint-enable */
