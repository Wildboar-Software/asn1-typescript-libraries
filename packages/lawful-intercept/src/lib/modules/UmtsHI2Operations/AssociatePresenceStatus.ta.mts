/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type BOOLEAN,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_PresenceType, _encode_PresenceType, _enum_for_PresenceType, PresenceType } from "../UmtsHI2Operations/PresenceType.ta.mjs";
// export { PresenceType, _enum_for_PresenceType, PresenceType_pTCClient /* IMPORTED_LONG_ENUMERATION_ITEM */, pTCClient /* IMPORTED_SHORT_ENUMERATION_ITEM */, PresenceType_pTCGroup /* IMPORTED_LONG_ENUMERATION_ITEM */, pTCGroup /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PresenceType, _encode_PresenceType } from "../UmtsHI2Operations/PresenceType.ta.mjs";


/**
 * @summary AssociatePresenceStatus
 * @description
 * 
 * Presence of one PTC associate or one PTC group. The PTC server reports it
 * when it is the watcher for the target.
 * 
 * Used on the associate-presence report and also when session initiation or
 * party join includes associate presence. Each entry is an identity, the kind
 * of identity, and whether it is connected.
 * 
 * 3GPP TS 33.108, clause 17.2.16, table 17.2.4, and table 17.2.9.
 * 
 * https://www.3gpp.org/DynaReport/33108.htm
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AssociatePresenceStatus ::= SEQUENCE
 * {
 *     presenceID        [1] UTF8String,
 *         -- identity of PTC Client(s)or the PTC group
 *     presenceType    [2] PresenceType,
 *     presenceStatus    [3] BOOLEAN,
 *         -- default false, true indicates connected.
 * ...
 * }
 * ```
 * 
 * @class
 */
export
class AssociatePresenceStatus {
    /**
     * @summary `presenceID`.
     * @description
     * 
     * Identity of the PTC client or clients, or of the PTC group, when it is
     * known.
     * 
     * 3GPP TS 33.108, clause 17.2.16 and annex B.3.
     * @public
     * @readonly
     */
    readonly presenceID: UTF8String;
    /**
     * @summary `presenceType`.
     * @description
     * 
     * Whether the presence identity is a PTC client or a PTC group.
     * 
     * 3GPP TS 33.108, clause 17.2.16.
     * @public
     * @readonly
     */
    readonly presenceType: PresenceType;
    /**
     * @summary `presenceStatus`.
     * @description
     * 
     * Presence state of that identity. Annex B.3 defaults this to false; true
     * means connected.
     * 
     * 3GPP TS 33.108, clause 17.2.16 and annex B.3.
     * @public
     * @readonly
     */
    readonly presenceStatus: BOOLEAN;
    /**
     * @summary Extensions that are not recognized.
     * @description
     * 
     * Extension additions that this version of annex B.3 does not define. They
     * are retained so a later addition on HI2 is not dropped.
     * 
     * 3GPP TS 33.108, annex B.3.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        presenceID: UTF8String,
        presenceType: PresenceType,
        presenceStatus: BOOLEAN,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.presenceID = presenceID;
        this.presenceType = presenceType;
        this.presenceStatus = presenceStatus;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a AssociatePresenceStatus
     * @description
     * 
     * This takes an `object` and converts it to a `AssociatePresenceStatus`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AssociatePresenceStatus`.
     * @returns {AssociatePresenceStatus}
     */
    public static _from_object (_o: { [_K in keyof (AssociatePresenceStatus)]: (AssociatePresenceStatus)[_K] }): AssociatePresenceStatus {
        return new AssociatePresenceStatus(_o.presenceID, _o.presenceType, _o.presenceStatus, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `presenceType`
         * @description
         * 
         * Whether the presence identity is a PTC client or a PTC group.
         * 
         * 3GPP TS 33.108, clause 17.2.16.
         * @public
         * @static
         */

    public static _enum_for_presenceType = _enum_for_PresenceType;
}

/**
 * @summary The Leading Root Component Types of AssociatePresenceStatus
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AssociatePresenceStatus: $.ComponentSpec[] = [
    new $.ComponentSpec("presenceID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("presenceType", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("presenceStatus", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of AssociatePresenceStatus
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AssociatePresenceStatus: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AssociatePresenceStatus
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AssociatePresenceStatus: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AssociatePresenceStatus: $.ASN1Decoder<AssociatePresenceStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AssociatePresenceStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AssociatePresenceStatus (el: _Element): AssociatePresenceStatus {
    if (!_cached_decoder_for_AssociatePresenceStatus) { _cached_decoder_for_AssociatePresenceStatus = function (el: _Element): AssociatePresenceStatus {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("AssociatePresenceStatus contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "presenceID";
    sequence[1].name = "presenceType";
    sequence[2].name = "presenceStatus";
    let presenceID!: UTF8String;
    let presenceType!: PresenceType;
    let presenceStatus!: BOOLEAN;
    presenceID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(sequence[0]);
    presenceType = $._decode_implicit<PresenceType>(() => _decode_PresenceType)(sequence[1]);
    presenceStatus = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(sequence[2]);
    return new AssociatePresenceStatus(
        presenceID,
        presenceType,
        presenceStatus,
        sequence.slice(3),
    );
}; }
    return _cached_decoder_for_AssociatePresenceStatus(el);
}

let _cached_encoder_for_AssociatePresenceStatus: $.ASN1Encoder<AssociatePresenceStatus> | null = null;

/**
 * @summary Encodes a(n) AssociatePresenceStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AssociatePresenceStatus, encoded as an ASN.1 Element.
 */
export
function _encode_AssociatePresenceStatus (value: AssociatePresenceStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AssociatePresenceStatus) { _cached_encoder_for_AssociatePresenceStatus = function (value: AssociatePresenceStatus, elGetter: $.ASN1Encoder<AssociatePresenceStatus>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.presenceID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_PresenceType, $.BER)(value.presenceType, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeBoolean, $.BER)(value.presenceStatus, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_AssociatePresenceStatus(value, elGetter);
}


/* eslint-enable */
