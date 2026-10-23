/* eslint-disable */
import {
    IA5String,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MultipleQFIContainer, _decode_MultipleQFIContainer, _encode_MultipleQFIContainer } from "../CHFChargingDataTypes/MultipleQFIContainer.ta.mjs";
import { RoamingChargingProfile, _decode_RoamingChargingProfile, _encode_RoamingChargingProfile } from "../CHFChargingDataTypes/RoamingChargingProfile.ta.mjs";


/**
 * @summary RoamingQBCInformation
 * @description
 *
 * This field holds the roaming 5G data connectivity specific information
 * described in TS 32.255 [15]
 *
 * 3GPP TS 32.298 V20.1.0 table 5.1.5.0.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RoamingQBCInformation ::= SET {
 *    multipleQFIcontainer     [0] IMPLICIT SEQUENCE  OF
 *       MultipleQFIContainer OPTIONAL,
 *    uPFID                    [1] IMPLICIT IA5String  ( SIZE( 1 .. 36 ) ) OPTIONAL,
 *    roamingChargingProfile   [2] IMPLICIT RoamingChargingProfile OPTIONAL}
 * ```
 * 
 * @class
 */
export
class RoamingQBCInformation {
    /**
     * @summary `multipleQFIcontainer`.
     * @public
     * @readonly
     */
    readonly multipleQFIcontainer: OPTIONAL<MultipleQFIContainer[]>;
    /**
     * @summary `uPFID`.
     * @public
     * @readonly
     */
    readonly uPFID: OPTIONAL<IA5String>;
    /**
     * @summary `roamingChargingProfile`.
     * @public
     * @readonly
     */
    readonly roamingChargingProfile: OPTIONAL<RoamingChargingProfile>;

    constructor (
        multipleQFIcontainer: OPTIONAL<MultipleQFIContainer[]>,
        uPFID: OPTIONAL<IA5String>,
        roamingChargingProfile: OPTIONAL<RoamingChargingProfile>
    ) {
        this.multipleQFIcontainer = multipleQFIcontainer;
        this.uPFID = uPFID;
        this.roamingChargingProfile = roamingChargingProfile;
    
        if (this.uPFID !== undefined && (this.uPFID.length < 1 || this.uPFID.length > 36)) {
            throw new ASN1SizeError("RoamingQBCInformation.uPFID violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a RoamingQBCInformation
     * @description
     * 
     * This takes an `object` and converts it to a `RoamingQBCInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RoamingQBCInformation`.
     * @returns {RoamingQBCInformation}
     */
    public static _from_object (_o: { [_K in keyof (RoamingQBCInformation)]: (RoamingQBCInformation)[_K] }): RoamingQBCInformation {
        return new RoamingQBCInformation(_o.multipleQFIcontainer, _o.uPFID, _o.roamingChargingProfile);
    }


}

/**
 * @summary The Leading Root Component Types of RoamingQBCInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RoamingQBCInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("multipleQFIcontainer", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("uPFID", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("roamingChargingProfile", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of RoamingQBCInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RoamingQBCInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RoamingQBCInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RoamingQBCInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RoamingQBCInformation: $.ASN1Decoder<RoamingQBCInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RoamingQBCInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RoamingQBCInformation (el: _Element): RoamingQBCInformation {
    if (!_cached_decoder_for_RoamingQBCInformation) { _cached_decoder_for_RoamingQBCInformation = function (el: _Element): RoamingQBCInformation {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let multipleQFIcontainer: OPTIONAL<MultipleQFIContainer[]>;
    let uPFID: OPTIONAL<IA5String>;
    let roamingChargingProfile: OPTIONAL<RoamingChargingProfile>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "multipleQFIcontainer": (_el: _Element): void => { multipleQFIcontainer = $._decode_implicit<MultipleQFIContainer[]>(() => $._decodeSequenceOf<MultipleQFIContainer>(() => _decode_MultipleQFIContainer))(_el); },
        "uPFID": (_el: _Element): void => { uPFID = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "roamingChargingProfile": (_el: _Element): void => { roamingChargingProfile = $._decode_implicit<RoamingChargingProfile>(() => _decode_RoamingChargingProfile)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_RoamingQBCInformation,
        _extension_additions_list_spec_for_RoamingQBCInformation,
        _root_component_type_list_2_spec_for_RoamingQBCInformation,
        undefined,
    );
    return new RoamingQBCInformation( /* SET_CONSTRUCTOR_CALL */
        multipleQFIcontainer,
        uPFID,
        roamingChargingProfile
    );
}; }
    return _cached_decoder_for_RoamingQBCInformation(el);
}

let _cached_encoder_for_RoamingQBCInformation: $.ASN1Encoder<RoamingQBCInformation> | null = null;

/**
 * @summary Encodes a(n) RoamingQBCInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RoamingQBCInformation, encoded as an ASN.1 Element.
 */
export
function _encode_RoamingQBCInformation (value: RoamingQBCInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RoamingQBCInformation) { _cached_encoder_for_RoamingQBCInformation = function (value: RoamingQBCInformation, _elGetter: $.ASN1Encoder<RoamingQBCInformation>): _Element {
    const _components: _Element[] = [];
    if (value.multipleQFIcontainer !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeSequenceOf<MultipleQFIContainer>(() => _encode_MultipleQFIContainer, $.BER), $.BER)(value.multipleQFIcontainer, $.BER));
    }
    if (value.uPFID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeIA5String, $.BER)(value.uPFID, $.BER));
    }
    if (value.roamingChargingProfile !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_RoamingChargingProfile, $.BER)(value.roamingChargingProfile, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_RoamingQBCInformation(value, elGetter);
}


/* eslint-enable */
