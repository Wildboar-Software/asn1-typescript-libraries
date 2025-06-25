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
    DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from '@wildboar/x500/src/lib/modules/InformationFramework/DistinguishedName.ta.mjs';
import {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from '@wildboar/x500/src/lib/modules/InformationFramework/Attribute.ta.mjs';

/**
 * @summary ObjectInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ObjectInformation ::= SEQUENCE {
 *   name   DistinguishedName,
 *   info   SET SIZE (1..MAX) OF Attribute {{SupportedAttributes}},
 *   ... }
 * ```
 *
 * @class
 */
export class ObjectInformation {
    constructor(
        /**
         * @summary `name`.
         * @public
         * @readonly
         */
        readonly name: DistinguishedName,
        /**
         * @summary `info`.
         * @public
         * @readonly
         */
        readonly info: Attribute[],
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ObjectInformation
     * @description
     *
     * This takes an `object` and converts it to a `ObjectInformation`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ObjectInformation`.
     * @returns {ObjectInformation}
     */
    public static _from_object(
        _o: { [_K in keyof ObjectInformation]: ObjectInformation[_K] }
    ): ObjectInformation {
        return new ObjectInformation(
            _o.name,
            _o.info,
            _o._unrecognizedExtensionsList
        );
    }
}


/**
 * @summary The Leading Root Component Types of ObjectInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ObjectInformation: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'name',
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        'info',
        false,
        $.hasTag(_TagClass.universal, 17)
    ),
];


/**
 * @summary The Trailing Root Component Types of ObjectInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ObjectInformation: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of ObjectInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ObjectInformation: $.ComponentSpec[] = [];


let _cached_decoder_for_ObjectInformation: $.ASN1Decoder<ObjectInformation> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ObjectInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ObjectInformation} The decoded data structure.
 */
export function _decode_ObjectInformation(el: _Element): ObjectInformation {
    if (!_cached_decoder_for_ObjectInformation) {
        _cached_decoder_for_ObjectInformation = function (
            el: _Element
        ): ObjectInformation {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'ObjectInformation contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'name';
            sequence[1].name = 'info';
            let name!: DistinguishedName;
            let info!: Attribute[];
            name = _decode_DistinguishedName(sequence[0]);
            info = $._decodeSetOf<Attribute>(() => _decode_Attribute)(
                sequence[1]
            );
            return new ObjectInformation(name, info, sequence.slice(2));
        };
    }
    return _cached_decoder_for_ObjectInformation(el);
}


let _cached_encoder_for_ObjectInformation: $.ASN1Encoder<ObjectInformation> | null = null;


/**
 * @summary Encodes a(n) ObjectInformation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ObjectInformation, encoded as an ASN.1 Element.
 */
export function _encode_ObjectInformation(
    value: ObjectInformation,
    elGetter: $.ASN1Encoder<ObjectInformation>
): _Element {
    if (!_cached_encoder_for_ObjectInformation) {
        _cached_encoder_for_ObjectInformation = function (
            value: ObjectInformation        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_DistinguishedName(
                                value.name,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeSetOf<Attribute>(
                                () => _encode_Attribute,
                                $.BER
                            )(value.info, $.BER),
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
    return _cached_encoder_for_ObjectInformation(value, elGetter);
}


/* eslint-enable */
