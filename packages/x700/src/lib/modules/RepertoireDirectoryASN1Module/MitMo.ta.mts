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
    GdmoObjectClass,
    _decode_GdmoObjectClass,
    _encode_GdmoObjectClass,
} from '../RepertoireASN1Module/GdmoObjectClass.ta.mjs';
import {
    InstanceIdList,
    _decode_InstanceIdList,
    _encode_InstanceIdList,
} from '../RepertoireDirectoryASN1Module/InstanceIdList.ta.mjs';
/**
 * @summary MitMo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MitMo ::= SEQUENCE {
 *   objectClass  GdmoObjectClass,
 *   instances    InstanceIdList OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class MitMo {
    constructor(
        /**
         * @summary `objectClass`.
         * @public
         * @readonly
         */
        readonly objectClass: GdmoObjectClass,
        /**
         * @summary `instances`.
         * @public
         * @readonly
         */
        readonly instances: OPTIONAL<InstanceIdList>
    ) {}

    /**
     * @summary Restructures an object into a MitMo
     * @description
     *
     * This takes an `object` and converts it to a `MitMo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MitMo`.
     * @returns {MitMo}
     */
    public static _from_object(_o: { [_K in keyof MitMo]: MitMo[_K] }): MitMo {
        return new MitMo(_o.objectClass, _o.instances);
    }
}

/**
 * @summary The Leading Root Component Types of MitMo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_MitMo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'objectClass',
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'instances',
        true,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];

/**
 * @summary The Trailing Root Component Types of MitMo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MitMo: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of MitMo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MitMo: $.ComponentSpec[] = [];

let _cached_decoder_for_MitMo: $.ASN1Decoder<MitMo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MitMo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MitMo} The decoded data structure.
 */
export function _decode_MitMo(el: _Element) {
    if (!_cached_decoder_for_MitMo) {
        _cached_decoder_for_MitMo = function (el: _Element): MitMo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let objectClass!: GdmoObjectClass;
            let instances: OPTIONAL<InstanceIdList>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                objectClass: (_el: _Element): void => {
                    objectClass = _decode_GdmoObjectClass(_el);
                },
                instances: (_el: _Element): void => {
                    instances = _decode_InstanceIdList(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_MitMo,
                _extension_additions_list_spec_for_MitMo,
                _root_component_type_list_2_spec_for_MitMo,
                undefined
            );
            return new MitMo /* SEQUENCE_CONSTRUCTOR_CALL */(
                objectClass,
                instances
            );
        };
    }
    return _cached_decoder_for_MitMo(el);
}

let _cached_encoder_for_MitMo: $.ASN1Encoder<MitMo> | null = null;

/**
 * @summary Encodes a(n) MitMo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MitMo, encoded as an ASN.1 Element.
 */
export function _encode_MitMo(value: MitMo, elGetter: $.ASN1Encoder<MitMo>) {
    if (!_cached_encoder_for_MitMo) {
        _cached_encoder_for_MitMo = function (
            value: MitMo        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_GdmoObjectClass(
                            value.objectClass,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.instances === undefined
                            ? undefined
                            : _encode_InstanceIdList(value.instances, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_MitMo(value, elGetter);
}


/* eslint-enable */
