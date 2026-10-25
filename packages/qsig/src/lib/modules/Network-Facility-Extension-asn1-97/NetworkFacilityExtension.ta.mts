/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EntityType, _decode_EntityType, _encode_EntityType, _enum_for_EntityType } from "../Network-Facility-Extension-asn1-97/EntityType.ta.mjs";
import { type AddressInformation, _decode_AddressInformation, _encode_AddressInformation } from "../Network-Facility-Extension-asn1-97/AddressInformation.ta.mjs";

/**
 * @summary NetworkFacilityExtension
 * @description
 *
 * Origin and destination of a Facility information element that has network
 * significance (ECMA-165 §11.3.3.1, §7.1.2). Table 10 gives the six codings.
 * A receiving End or Transit PINX uses the NFE to decide whether it is the
 * Destination PINX, must relay the element, or must discard it (§7.1.2.2).
 * A non-conforming NFE causes the Facility information element to be
 * discarded.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NetworkFacilityExtension ::= [10] IMPLICIT SEQUENCE {
 *     sourceEntity [0] IMPLICIT EntityType,
 *     sourceEntityAddress [1] AddressInformation OPTIONAL,
 *     destinationEntity [2] IMPLICIT EntityType,
 *     destinationEntityAddress [3] AddressInformation OPTIONAL
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
 * Role of the sending PINX: `endPINX` or `anyTypeOfPINX`. Avoid `endPINX`
 * if this PINX might cease to be an End PINX before a response is received
 * (ECMA-165 §7.1.2.1, Table 10).
     * @public
     * @readonly
     */
    readonly sourceEntity: EntityType;
    /**
     * @summary `sourceEntityAddress`.
     * @description
     *
     * PINX address of the source (§4.30). Omitted when `sourceEntity` is
     * `endPINX` (Table 10, cases 1 to 3). Included when a Transit PINX is the
     * source (cases 4 to 6).
     * @public
     * @readonly
     */
    readonly sourceEntityAddress: OPTIONAL<AddressInformation>;
    /**
     * @summary `destinationEntity`.
     * @description
     *
     * `endPINX` selects the End PINX in the direction of this Facility
     * information element. `anyTypeOfPINX` selects either a specific PINX or
     * the next PINX that understands the contents (ECMA-165 §7.1.2.1 Table 10,
     * §7.1.2.2).
     * @public
     * @readonly
     */
    readonly destinationEntity: EntityType;
    /**
     * @summary `destinationEntityAddress`.
     * @description
     *
     * Present when a specific PINX is addressed (Table 10, cases 2 and 5).
     * Absent for the End PINX (cases 1 and 4) and for the next PINX that
     * understands the contents (cases 3 and 6). If `endPINX` is indicated and
     * an address is present in error, the receiver ignores the address
     * (§7.1.2.2).
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

    public static _enum_for_sourceEntity: typeof _enum_for_EntityType = _enum_for_EntityType;        /**
         * @summary The enum used as the type of the component `destinationEntity`
         * @public
         * @static
         */

    public static _enum_for_destinationEntity: typeof _enum_for_EntityType = _enum_for_EntityType;
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
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_EntityType, $.BER)(value.sourceEntity, $.BER));
    if (value.sourceEntityAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => _encode_AddressInformation, $.BER)(value.sourceEntityAddress, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_EntityType, $.BER)(value.destinationEntity, $.BER));
    if (value.destinationEntityAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => _encode_AddressInformation, $.BER)(value.destinationEntityAddress, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}, $.BER); }
    return _cached_encoder_for_NetworkFacilityExtension(value, elGetter);
}

/* eslint-enable */
