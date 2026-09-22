/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EntityType, _decode_EntityType, _encode_EntityType, _enum_for_EntityType } from "../Network-Facility-Extension/EntityType.ta.mjs";
// export { EntityType, _enum_for_EntityType, EntityType_endPINX /* IMPORTED_LONG_ENUMERATION_ITEM */, endPINX /* IMPORTED_SHORT_ENUMERATION_ITEM */, EntityType_anyTypeOfPINX /* IMPORTED_LONG_ENUMERATION_ITEM */, anyTypeOfPINX /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_EntityType, _encode_EntityType } from "../Network-Facility-Extension/EntityType.ta.mjs";
import { AddressInformation, _decode_AddressInformation, _encode_AddressInformation } from "../Network-Facility-Extension/AddressInformation.ta.mjs";
// export { AddressInformation, _decode_AddressInformation, _encode_AddressInformation } from "../Network-Facility-Extension/AddressInformation.ta.mjs";


/**
 * @summary NetworkFacilityExtension
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NetworkFacilityExtension ::= [10] IMPLICIT SEQUENCE {
 *   sourceEntity              [0] IMPLICIT EntityType,
 *   sourceEntityAddress       [1]  AddressInformation OPTIONAL,
 *   destinationEntity         [2] IMPLICIT EntityType,
 *   destinationEntityAddress  [3]  AddressInformation OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class NetworkFacilityExtension {
    constructor (
        /**
         * @summary `sourceEntity`.
         * @public
         * @readonly
         */
        readonly sourceEntity: EntityType,
        /**
         * @summary `sourceEntityAddress`.
         * @public
         * @readonly
         */
        readonly sourceEntityAddress: OPTIONAL<AddressInformation>,
        /**
         * @summary `destinationEntity`.
         * @public
         * @readonly
         */
        readonly destinationEntity: EntityType,
        /**
         * @summary `destinationEntityAddress`.
         * @public
         * @readonly
         */
        readonly destinationEntityAddress: OPTIONAL<AddressInformation>
    ) {}

    /**
     * @summary Restructures an object into a NetworkFacilityExtension
     * @description
     * 
     * This takes an `object` and converts it to a `NetworkFacilityExtension`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NetworkFacilityExtension`.
     * @returns {NetworkFacilityExtension}
     */
    public static _from_object (_o: { [_K in keyof (NetworkFacilityExtension)]: (NetworkFacilityExtension)[_K] }): NetworkFacilityExtension {
        return new NetworkFacilityExtension(_o.sourceEntity, _o.sourceEntityAddress, _o.destinationEntity, _o.destinationEntityAddress);
    }

        /**
         * @summary The enum used as the type of the component `sourceEntity`
         * @public
         * @static
         */

    public static _enum_for_sourceEntity = _enum_for_EntityType;        /**
         * @summary The enum used as the type of the component `destinationEntity`
         * @public
         * @static
         */

    public static _enum_for_destinationEntity = _enum_for_EntityType;
}

/**
 * @summary The Leading Root Component Types of NetworkFacilityExtension
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NetworkFacilityExtension: $.ComponentSpec[] = [
    new $.ComponentSpec("sourceEntity", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("sourceEntityAddress", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("destinationEntity", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("destinationEntityAddress", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of NetworkFacilityExtension
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NetworkFacilityExtension: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NetworkFacilityExtension
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NetworkFacilityExtension: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NetworkFacilityExtension: $.ASN1Decoder<NetworkFacilityExtension> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NetworkFacilityExtension
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NetworkFacilityExtension (el: _Element): NetworkFacilityExtension {
    if (!_cached_decoder_for_NetworkFacilityExtension) { _cached_decoder_for_NetworkFacilityExtension = $._decode_implicit<NetworkFacilityExtension>(() => function (el: _Element): NetworkFacilityExtension {
    let sourceEntity!: EntityType;
    let sourceEntityAddress: OPTIONAL<AddressInformation>;
    let destinationEntity!: EntityType;
    let destinationEntityAddress: OPTIONAL<AddressInformation>;
    const callbacks: $.DecodingMap = {
        "sourceEntity": (_el: _Element): void => { sourceEntity = $._decode_implicit<EntityType>(() => _decode_EntityType)(_el); },
        "sourceEntityAddress": (_el: _Element): void => { sourceEntityAddress = $._decode_explicit<AddressInformation>(() => _decode_AddressInformation)(_el); },
        "destinationEntity": (_el: _Element): void => { destinationEntity = $._decode_implicit<EntityType>(() => _decode_EntityType)(_el); },
        "destinationEntityAddress": (_el: _Element): void => { destinationEntityAddress = $._decode_explicit<AddressInformation>(() => _decode_AddressInformation)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_NetworkFacilityExtension,
        _extension_additions_list_spec_for_NetworkFacilityExtension,
        _root_component_type_list_2_spec_for_NetworkFacilityExtension,
        undefined,
    );
    return new NetworkFacilityExtension(
        sourceEntity,
        sourceEntityAddress,
        destinationEntity,
        destinationEntityAddress
    );
}); }
    return _cached_decoder_for_NetworkFacilityExtension(el);
}

let _cached_encoder_for_NetworkFacilityExtension: $.ASN1Encoder<NetworkFacilityExtension> | null = null;

/**
 * @summary Encodes a(n) NetworkFacilityExtension into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NetworkFacilityExtension, encoded as an ASN.1 Element.
 */
export
function _encode_NetworkFacilityExtension (value: NetworkFacilityExtension, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NetworkFacilityExtension) { _cached_encoder_for_NetworkFacilityExtension = $._encode_implicit(_TagClass.context, 10, () => function (value: NetworkFacilityExtension, elGetter: $.ASN1Encoder<NetworkFacilityExtension>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_EntityType, $.BER)(value.sourceEntity, $.BER),
            /* IF_ABSENT  */ ((value.sourceEntityAddress === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_AddressInformation, $.BER)(value.sourceEntityAddress, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_EntityType, $.BER)(value.destinationEntity, $.BER),
            /* IF_ABSENT  */ ((value.destinationEntityAddress === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => _encode_AddressInformation, $.BER)(value.destinationEntityAddress, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_NetworkFacilityExtension(value, elGetter);
}


/* eslint-enable */
