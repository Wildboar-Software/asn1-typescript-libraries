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
    NameType,
    _decode_NameType,
    _encode_NameType,
} from '../ASN1DefinedTypesModule/NameType.ta.mjs';
import {
    PointerOrNull,
    _decode_PointerOrNull,
    _encode_PointerOrNull,
} from '../ASN1DefinedTypesModule/PointerOrNull.ta.mjs';


/**
 * @summary PortAssociation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PortAssociation ::= SEQUENCE {
 *   portId     NameType,
 *   portTrail  PointerOrNull -- the choice of NULL means unassigned
 * }
 * ```
 *
 */
export class PortAssociation {
    constructor(
        /**
         * @summary `portId`.
         * @public
         * @readonly
         */
        readonly portId: NameType,
        /**
         * @summary `portTrail`.
         * @public
         * @readonly
         */
        readonly portTrail: PointerOrNull
    ) {}

    /**
     * @summary Restructures an object into a PortAssociation
     * @description
     *
     * This takes an `object` and converts it to a `PortAssociation`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PortAssociation`.
     * @returns {PortAssociation}
     */
    public static _from_object(
        _o: { [_K in keyof PortAssociation]: PortAssociation[_K] }
    ): PortAssociation {
        return new PortAssociation(_o.portId, _o.portTrail);
    }
}


/**
 * @summary The Leading Root Component Types of PortAssociation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PortAssociation: $.ComponentSpec[] = [
    new $.ComponentSpec("portId", false, $.or(
        $.hasTag(_TagClass.universal, _UniversalType.integer),
        $.hasTag(_TagClass.context, _UniversalType.graphicString),
    )),
    new $.ComponentSpec("portTrail", false, $.or(
        $.hasTag(_TagClass.context, 2),
        $.hasTag(_TagClass.context, 3),
        $.hasTag(_TagClass.context, 4),
        $.hasTag(_TagClass.universal, _UniversalType.nill),
    )),
];


/**
 * @summary The Trailing Root Component Types of PortAssociation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PortAssociation: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of PortAssociation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PortAssociation: $.ComponentSpec[] = [];


let _cached_decoder_for_PortAssociation: $.ASN1Decoder<PortAssociation> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) PortAssociation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PortAssociation} The decoded data structure.
 */
export function _decode_PortAssociation(el: _Element): PortAssociation {
    if (!_cached_decoder_for_PortAssociation) {
        _cached_decoder_for_PortAssociation = function (
            el: _Element
        ): PortAssociation {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'PortAssociation contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'portId';
            sequence[1].name = 'portTrail';
            let portId!: NameType;
            let portTrail!: PointerOrNull;
            portId = _decode_NameType(sequence[0]);
            portTrail = _decode_PointerOrNull(sequence[1]);
            return new PortAssociation(portId, portTrail);
        };
    }
    return _cached_decoder_for_PortAssociation(el);
}


let _cached_encoder_for_PortAssociation: $.ASN1Encoder<PortAssociation> | null = null;


/**
 * @summary Encodes a(n) PortAssociation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PortAssociation, encoded as an ASN.1 Element.
 */
export function _encode_PortAssociation(
    value: PortAssociation,
    elGetter: $.ASN1Encoder<PortAssociation>
): _Element {
    if (!_cached_encoder_for_PortAssociation) {
        _cached_encoder_for_PortAssociation = function (
            value: PortAssociation        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_NameType(value.portId, $.BER),
                        /* REQUIRED   */ _encode_PointerOrNull(
                            value.portTrail,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_PortAssociation(value, elGetter);
}


/* eslint-enable */
