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
import * as $ from '@wildboar/asn1/functional';
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
import { ErrorId, _decode_ErrorId, _encode_ErrorId } from '../Schedulerev1-ASN1Module/ErrorId.ta.mjs';


/**
 * @summary CommonError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CommonError ::= SEQUENCE {
 *   managedObjectClass     ObjectClass,
 *   managedObjectInstance  ObjectInstance,
 *   errorId                SCHED-ERROR.&id({CommonErrorSet}),
 *   errorValue
 *     SCHED-ERROR.&Value({CommonErrorSet}{@.errorId}) OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class CommonError {
    constructor(
        /**
         * @summary `managedObjectClass`.
         * @public
         * @readonly
         */
        readonly managedObjectClass: ObjectClass,
        /**
         * @summary `managedObjectInstance`.
         * @public
         * @readonly
         */
        readonly managedObjectInstance: ObjectInstance,
        /**
         * @summary `errorId`.
         * @public
         * @readonly
         */
        readonly errorId: ErrorId,
        /**
         * @summary `errorValue`.
         * @public
         * @readonly
         */
        readonly errorValue: OPTIONAL<_Element>
    ) {}

    /**
     * @summary Restructures an object into a CommonError
     * @description
     *
     * This takes an `object` and converts it to a `CommonError`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CommonError`.
     * @returns {CommonError}
     */
    public static _from_object(
        _o: { [_K in keyof CommonError]: CommonError[_K] }
    ): CommonError {
        return new CommonError(
            _o.managedObjectClass,
            _o.managedObjectInstance,
            _o.errorId,
            _o.errorValue
        );
    }
}


/**
 * @summary The Leading Root Component Types of CommonError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CommonError: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'managedObjectClass',
        false,
        $.hasAnyTag
    ),
    new $.ComponentSpec(
        'managedObjectInstance',
        false,
        $.hasAnyTag
    ),
    new $.ComponentSpec('errorId', false, $.hasAnyTag),
    new $.ComponentSpec('errorValue', true, $.hasAnyTag),
];


/**
 * @summary The Trailing Root Component Types of CommonError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CommonError: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of CommonError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CommonError: $.ComponentSpec[] = [];


let _cached_decoder_for_CommonError: $.ASN1Decoder<CommonError> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) CommonError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CommonError} The decoded data structure.
 */
export function _decode_CommonError(el: _Element) {
    if (!_cached_decoder_for_CommonError) {
        _cached_decoder_for_CommonError = function (el: _Element): CommonError {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let managedObjectClass!: ObjectClass;
            let managedObjectInstance!: ObjectInstance;
            let errorId!: ErrorId;
            let errorValue: OPTIONAL<_Element>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                managedObjectClass: (_el: _Element): void => {
                    managedObjectClass = _decode_ObjectClass(_el);
                },
                managedObjectInstance: (_el: _Element): void => {
                    managedObjectInstance = _decode_ObjectInstance(_el);
                },
                errorId: (_el: _Element): void => {
                    errorId = _decode_ErrorId(_el);
                },
                errorValue: (_el: _Element): void => {
                    errorValue = $._decodeAny(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CommonError,
                _extension_additions_list_spec_for_CommonError,
                _root_component_type_list_2_spec_for_CommonError,
                undefined
            );
            return new CommonError /* SEQUENCE_CONSTRUCTOR_CALL */(
                managedObjectClass,
                managedObjectInstance,
                errorId,
                errorValue
            );
        };
    }
    return _cached_decoder_for_CommonError(el);
}


let _cached_encoder_for_CommonError: $.ASN1Encoder<CommonError> | null = null;


/**
 * @summary Encodes a(n) CommonError into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CommonError, encoded as an ASN.1 Element.
 */
export function _encode_CommonError(
    value: CommonError,
    elGetter: $.ASN1Encoder<CommonError>
) {
    if (!_cached_encoder_for_CommonError) {
        _cached_encoder_for_CommonError = function (
            value: CommonError        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ObjectClass(
                            value.managedObjectClass,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_ObjectInstance(
                            value.managedObjectInstance,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_ErrorId(value.errorId, $.BER),
                        /* IF_ABSENT  */ value.errorValue === undefined
                            ? undefined
                            : $._encodeAny(value.errorValue, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_CommonError(value, elGetter);
}


/* eslint-enable */
