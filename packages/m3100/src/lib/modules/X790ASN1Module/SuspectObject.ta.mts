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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip';

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
        $.hasTag(_TagClass.universal, 6)
    ),
    new $.ComponentSpec(
        'suspectObjectInstance',
        false,
        $.hasAnyTag
    ),
    new $.ComponentSpec(
        'failureProbability',
        true,
        $.hasTag(_TagClass.universal, 2)
    ),
];


/**
 * @summary The Trailing Root Component Types of SuspectObject
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SuspectObject: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of SuspectObject
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SuspectObject: $.ComponentSpec[] = [];


let _cached_decoder_for_SuspectObject: $.ASN1Decoder<SuspectObject> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) SuspectObject
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SuspectObject} The decoded data structure.
 */
export function _decode_SuspectObject(el: _Element): SuspectObject {
    if (!_cached_decoder_for_SuspectObject) {
        _cached_decoder_for_SuspectObject = function (
            el: _Element
        ): SuspectObject {
            let suspectObjectClass!: OBJECT_IDENTIFIER;
            let suspectObjectInstance!: ObjectInstance;
            let failureProbability: OPTIONAL<INTEGER>;
            let _unrecognizedExtensionsList: _Element[] = [];
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
            return new SuspectObject (
                suspectObjectClass,
                suspectObjectInstance,
                failureProbability,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_SuspectObject(el);
}


let _cached_encoder_for_SuspectObject: $.ASN1Encoder<SuspectObject> | null = null;


/**
 * @summary Encodes a(n) SuspectObject into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SuspectObject, encoded as an ASN.1 Element.
 */
export function _encode_SuspectObject(
    value: SuspectObject,
    elGetter: $.ASN1Encoder<SuspectObject>
): _Element {
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


/* eslint-enable */
