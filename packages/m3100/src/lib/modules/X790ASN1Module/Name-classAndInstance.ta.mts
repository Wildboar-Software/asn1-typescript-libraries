/* eslint-disable */
import {
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
 * @summary Name_classAndInstance
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Name-classAndInstance ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 */
export class Name_classAndInstance {
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
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a Name_classAndInstance
     * @description
     *
     * This takes an `object` and converts it to a `Name_classAndInstance`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Name_classAndInstance`.
     * @returns {Name_classAndInstance}
     */
    public static _from_object(
        _o: { [_K in keyof Name_classAndInstance]: Name_classAndInstance[_K] }
    ): Name_classAndInstance {
        return new Name_classAndInstance(
            _o.managedObjectClass,
            _o.managedObjectInstance,
            _o._unrecognizedExtensionsList
        );
    }
}


/**
 * @summary The Leading Root Component Types of Name_classAndInstance
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Name_classAndInstance: $.ComponentSpec[] = [
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
];


/**
 * @summary The Trailing Root Component Types of Name_classAndInstance
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Name_classAndInstance: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of Name_classAndInstance
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Name_classAndInstance: $.ComponentSpec[] = [];


let _cached_decoder_for_Name_classAndInstance: $.ASN1Decoder<Name_classAndInstance> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Name_classAndInstance
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Name_classAndInstance} The decoded data structure.
 */
export function _decode_Name_classAndInstance(el: _Element): Name_classAndInstance {
    if (!_cached_decoder_for_Name_classAndInstance) {
        _cached_decoder_for_Name_classAndInstance = function (
            el: _Element
        ): Name_classAndInstance {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'Name-classAndInstance contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'managedObjectClass';
            sequence[1].name = 'managedObjectInstance';
            let managedObjectClass!: ObjectClass;
            let managedObjectInstance!: ObjectInstance;
            managedObjectClass = _decode_ObjectClass(sequence[0]);
            managedObjectInstance = _decode_ObjectInstance(sequence[1]);
            return new Name_classAndInstance(
                managedObjectClass,
                managedObjectInstance,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_Name_classAndInstance(el);
}


let _cached_encoder_for_Name_classAndInstance: $.ASN1Encoder<Name_classAndInstance> | null = null;


/**
 * @summary Encodes a(n) Name_classAndInstance into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Name_classAndInstance, encoded as an ASN.1 Element.
 */
export function _encode_Name_classAndInstance(
    value: Name_classAndInstance,
    elGetter: $.ASN1Encoder<Name_classAndInstance>
): _Element {
    if (!_cached_encoder_for_Name_classAndInstance) {
        _cached_encoder_for_Name_classAndInstance = function (
            value: Name_classAndInstance        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_ObjectClass(
                                value.managedObjectClass,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_ObjectInstance(
                                value.managedObjectInstance,
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
    return _cached_encoder_for_Name_classAndInstance(value, elGetter);
}


/* eslint-enable */
