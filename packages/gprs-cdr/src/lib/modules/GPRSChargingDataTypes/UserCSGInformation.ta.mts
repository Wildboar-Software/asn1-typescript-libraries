/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    NULL,
    OCTET_STRING,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_CSGAccessMode, _encode_CSGAccessMode, _enum_for_CSGAccessMode, CSGAccessMode } from "../GPRSChargingDataTypes/CSGAccessMode.ta.mjs";
// export { CSGAccessMode, _enum_for_CSGAccessMode, CSGAccessMode_closedMode /* IMPORTED_LONG_ENUMERATION_ITEM */, closedMode /* IMPORTED_SHORT_ENUMERATION_ITEM */, CSGAccessMode_hybridMode /* IMPORTED_LONG_ENUMERATION_ITEM */, hybridMode /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_CSGAccessMode, _encode_CSGAccessMode } from "../GPRSChargingDataTypes/CSGAccessMode.ta.mjs";


/**
 * @summary UserCSGInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UserCSGInformation ::= SEQUENCE {
 *    cSGId                     [0] IMPLICIT OCTET STRING ( SIZE( 4 ) ),
 *    cSGAccessMode             [1] IMPLICIT CSGAccessMode,
 *    cSGMembershipIndication   [2] IMPLICIT NULL OPTIONAL}
 * ```
 * 
 * @class
 */
export
class UserCSGInformation {
    /**
     * @summary `cSGId`.
     * @public
     * @readonly
     */
    readonly cSGId: OCTET_STRING;
    /**
     * @summary `cSGAccessMode`.
     * @public
     * @readonly
     */
    readonly cSGAccessMode: CSGAccessMode;
    /**
     * @summary `cSGMembershipIndication`.
     * @public
     * @readonly
     */
    readonly cSGMembershipIndication: OPTIONAL<NULL>;

    constructor (
        cSGId: OCTET_STRING,
        cSGAccessMode: CSGAccessMode,
        cSGMembershipIndication: OPTIONAL<NULL>
    ) {
        this.cSGId = cSGId;
        this.cSGAccessMode = cSGAccessMode;
        this.cSGMembershipIndication = cSGMembershipIndication;
    }

    /**
     * @summary Restructures an object into a UserCSGInformation
     * @description
     * 
     * This takes an `object` and converts it to a `UserCSGInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UserCSGInformation`.
     * @returns {UserCSGInformation}
     */
    public static _from_object (_o: { [_K in keyof (UserCSGInformation)]: (UserCSGInformation)[_K] }): UserCSGInformation {
        return new UserCSGInformation(_o.cSGId, _o.cSGAccessMode, _o.cSGMembershipIndication);
    }

        /**
         * @summary The enum used as the type of the component `cSGAccessMode`
         * @public
         * @static
         */

    public static _enum_for_cSGAccessMode = _enum_for_CSGAccessMode;
}

/**
 * @summary The Leading Root Component Types of UserCSGInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UserCSGInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("cSGId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("cSGAccessMode", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("cSGMembershipIndication", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of UserCSGInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UserCSGInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UserCSGInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UserCSGInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_UserCSGInformation: $.ASN1Decoder<UserCSGInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UserCSGInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UserCSGInformation (el: _Element): UserCSGInformation {
    if (!_cached_decoder_for_UserCSGInformation) { _cached_decoder_for_UserCSGInformation = function (el: _Element): UserCSGInformation {
    let cSGId!: OCTET_STRING;
    let cSGAccessMode!: CSGAccessMode;
    let cSGMembershipIndication: OPTIONAL<NULL>;
    const callbacks: $.DecodingMap = {
        "cSGId": (_el: _Element): void => { cSGId = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "cSGAccessMode": (_el: _Element): void => { cSGAccessMode = $._decode_implicit<CSGAccessMode>(() => _decode_CSGAccessMode)(_el); },
        "cSGMembershipIndication": (_el: _Element): void => { cSGMembershipIndication = $._decode_implicit<NULL>(() => $._decodeNull)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_UserCSGInformation,
        _extension_additions_list_spec_for_UserCSGInformation,
        _root_component_type_list_2_spec_for_UserCSGInformation,
        undefined,
    );
    return new UserCSGInformation(
        cSGId,
        cSGAccessMode,
        cSGMembershipIndication
    );
}; }
    return _cached_decoder_for_UserCSGInformation(el);
}

let _cached_encoder_for_UserCSGInformation: $.ASN1Encoder<UserCSGInformation> | null = null;

/**
 * @summary Encodes a(n) UserCSGInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UserCSGInformation, encoded as an ASN.1 Element.
 */
export
function _encode_UserCSGInformation (value: UserCSGInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UserCSGInformation) { _cached_encoder_for_UserCSGInformation = function (value: UserCSGInformation, elGetter: $.ASN1Encoder<UserCSGInformation>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.cSGId, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_CSGAccessMode, $.BER)(value.cSGAccessMode, $.BER));
    if (value.cSGMembershipIndication !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER)(value.cSGMembershipIndication, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_UserCSGInformation(value, elGetter);
}


/* eslint-enable */
