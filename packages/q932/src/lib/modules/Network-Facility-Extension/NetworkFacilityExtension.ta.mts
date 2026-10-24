/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EntityType, _decode_EntityType, _encode_EntityType, _enum_for_EntityType } from "../Network-Facility-Extension/EntityType.ta.mjs";
import { type AddressInformation, _decode_AddressInformation, _encode_AddressInformation } from "../Network-Facility-Extension/AddressInformation.ta.mjs";


/**
 * @summary NetworkFacilityExtension
 * @description
 * 
 * Network facility extension (NFE). Included only when the Facility information
 * element protocol profile is "networking extensions" (octet group 3.1). It
 * names the source and destination PINX entities, each optionally with a
 * `PartyNumber`.
 *
 * Q.932 reproduces the ISO/IEC 11582 definition. Where this extract differs
 * from ISO/IEC 11582, ISO/IEC 11582 applies.
 *
 * A nodal entity that does not terminate GFT-Control forwards the Facility
 * information element to the next entity regardless of `destinationEntity`.
 * Q.932 gives a transit PINX with reduced functionality, and a relay node, as
 * examples.
 *
 * ITU-T Rec. Q.932 (05/1998) §8.2.3, Annex D, D.3.6.2.1 and D.4.3.1.2.
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
    /**
     * @summary `sourceEntity`.
     * @description
     * 
     * PINX entity that originated the facility. `endPINX` or `anyTypeOfPINX`.
     * 
     * @public
     * @readonly
     */
    readonly sourceEntity: EntityType;
    /**
     * @summary `sourceEntityAddress`.
     * @description
     * 
     * Optional `PartyNumber` of the source entity.
     * 
     * @public
     * @readonly
     */
    readonly sourceEntityAddress: OPTIONAL<AddressInformation>;
    /**
     * @summary `destinationEntity`.
     * @description
     * 
     * PINX entity that should receive the facility. A node that does not
     * terminate GFT-Control forwards the Facility information element
     * regardless of this value. ITU-T Rec. Q.932 (05/1998) Annex D, D.4.3.1.2.
     * 
     * @public
     * @readonly
     */
    readonly destinationEntity: EntityType;
    /**
     * @summary `destinationEntityAddress`.
     * @description
     * 
     * Optional `PartyNumber` of the destination entity.
     * 
     * @public
     * @readonly
     */
    readonly destinationEntityAddress: OPTIONAL<AddressInformation>;

    constructor (
        sourceEntity: EntityType,
        sourceEntityAddress: OPTIONAL<AddressInformation>,
        destinationEntity: EntityType,
        destinationEntityAddress?: OPTIONAL<AddressInformation>
    ) {
        this.sourceEntity = sourceEntity;
        this.sourceEntityAddress = sourceEntityAddress;
        this.destinationEntity = destinationEntity;
        this.destinationEntityAddress = destinationEntityAddress;
    }

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
    if (!_cached_encoder_for_NetworkFacilityExtension) { _cached_encoder_for_NetworkFacilityExtension = $._encode_implicit(_TagClass.context, 10, () => function (value: NetworkFacilityExtension, _elGetter: $.ASN1Encoder<NetworkFacilityExtension>): _Element {
    const _components: _Element[] = new Array(4);
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_EntityType, $.BER)(value.sourceEntity, $.BER);
    if (value.sourceEntityAddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => _encode_AddressInformation, $.BER)(value.sourceEntityAddress, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_EntityType, $.BER)(value.destinationEntity, $.BER);
    if (value.destinationEntityAddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => _encode_AddressInformation, $.BER)(value.destinationEntityAddress, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}, $.BER); }
    return _cached_encoder_for_NetworkFacilityExtension(value, elGetter);
}


/* eslint-enable */
