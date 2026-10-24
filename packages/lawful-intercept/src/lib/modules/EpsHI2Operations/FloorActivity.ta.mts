/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FloorActivity
 * @description
 * 
 * Which talk-burst control action happened in a PTC session. Mandatory on the
 * floor-control continue record (clause 17.2.14, table 17.2.14). Floor control
 * and talk-burst control are the same thing. The module comments state the
 * boolean polarity; the table states which TBCP message each component reports.
 * 3GPP TS 33.108 (https://www.3gpp.org/DynaReport/33108.htm).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FloorActivity ::= SEQUENCE
 * {
 *     tBCP-Request    [1] BOOLEAN,
 *         -- default False, true indicates Granted.
 *     tBCP-Granted    [2] BOOLEAN,
 *         -- default False, true indicates Granted permission to talk.
 *     tBCP-Deny        [3] BOOLEAN,
 *         -- default True, False indicates permission granted.
 *     tBCP-Queued     [4] BOOLEAN,
 *         -- default False, true indicates the request to talk is in queue.
 *     tBCP-Release    [5] BOOLEAN,
 *         -- default True, true indicates the Request to talk is completed,
 *         -- False indicates PTC Client has the request to talk.
 *     tBCP-Revoke        [6] BOOLEAN,
 *         -- default False, true indicates the privilege to talk is canceld from the
 *         -- PTC server.
 *     tBCP-Taken        [7] BOOLEAN,
 *         -- default True, false indicates another PTC Client has the permission to talk.
 *     tBCP-Idle        [8]    BOOLEAN,
 *         -- default True, False indicates the Talk Burst Protocol is taken.
 * ...
 * }
 * ```
 * 
 * @class
 */
export
class FloorActivity {
    /**
     * @summary `tBCP_Request`.
     * @description
     * 
     * The PTC client asked the server for permission to send a talk burst
     * (table 17.2.14). The module comment says the value is false unless it
     * "indicates Granted", which does not match that table.
     * 
     * @public
     * @readonly
     */
    readonly tBCP_Request: BOOLEAN;
    /**
     * @summary `tBCP_Granted`.
     * @description
     * 
     * The server granted this client permission to send a talk burst (table
     * 17.2.14). The module comment says false unless permission to talk was
     * granted.
     * 
     * @public
     * @readonly
     */
    readonly tBCP_Granted: BOOLEAN;
    /**
     * @summary `tBCP_Deny`.
     * @description
     * 
     * The server denied this client permission to send a talk burst (table
     * 17.2.14). The module comment says the value is true unless permission was
     * granted.
     * 
     * @public
     * @readonly
     */
    readonly tBCP_Deny: BOOLEAN;
    /**
     * @summary `tBCP_Queued`.
     * @description
     * 
     * The request to talk is queued, when queued floor control is supported
     * (table 17.2.14). The module comment says false unless the request is in
     * queue.
     * 
     * @public
     * @readonly
     */
    readonly tBCP_Queued: BOOLEAN;
    /**
     * @summary `tBCP_Release`.
     * @description
     * 
     * The request to talk has completed (table 17.2.14). The module comment
     * says true when the request is completed, and false when the client still
     * holds the request.
     * 
     * @public
     * @readonly
     */
    readonly tBCP_Release: BOOLEAN;
    /**
     * @summary `tBCP_Revoke`.
     * @description
     * 
     * The server took the media resource back, for pre-emption or to stop an
     * over-long talk burst (table 17.2.14). The module comment says false
     * unless the server cancelled the privilege.
     * 
     * @public
     * @readonly
     */
    readonly tBCP_Revoke: BOOLEAN;
    /**
     * @summary `tBCP_Taken`.
     * @description
     * 
     * Some other client has permission to send a talk burst. Sent to every
     * client except the one that was granted (table 17.2.14). The module
     * comment says the value is true unless another client has permission.
     * 
     * @public
     * @readonly
     */
    readonly tBCP_Taken: BOOLEAN;
    /**
     * @summary `tBCP_Idle`.
     * @description
     * 
     * Nobody has permission to send a talk burst, and the server may accept a
     * request (table 17.2.14). The module comment says true unless the
     * talk-burst protocol is taken.
     * 
     * @public
     * @readonly
     */
    readonly tBCP_Idle: BOOLEAN;
    /**
     * @summary Extensions that are not recognized.
     * @description
     * 
     * Extension additions that this version of the specification does not
     * define. Annex D requires the LEMF to ignore an unrecognized parameter and
     * continue with the record.
     * 
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        tBCP_Request: BOOLEAN,
        tBCP_Granted: BOOLEAN,
        tBCP_Deny: BOOLEAN,
        tBCP_Queued: BOOLEAN,
        tBCP_Release: BOOLEAN,
        tBCP_Revoke: BOOLEAN,
        tBCP_Taken: BOOLEAN,
        tBCP_Idle: BOOLEAN,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.tBCP_Request = tBCP_Request;
        this.tBCP_Granted = tBCP_Granted;
        this.tBCP_Deny = tBCP_Deny;
        this.tBCP_Queued = tBCP_Queued;
        this.tBCP_Release = tBCP_Release;
        this.tBCP_Revoke = tBCP_Revoke;
        this.tBCP_Taken = tBCP_Taken;
        this.tBCP_Idle = tBCP_Idle;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a FloorActivity
     * @description
     * 
     * This takes an `object` and converts it to a `FloorActivity`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FloorActivity`.
     * @returns {FloorActivity}
     */
    public static _from_object (_o: { [_K in keyof (FloorActivity)]: (FloorActivity)[_K] }): FloorActivity {
        return new FloorActivity(_o.tBCP_Request, _o.tBCP_Granted, _o.tBCP_Deny, _o.tBCP_Queued, _o.tBCP_Release, _o.tBCP_Revoke, _o.tBCP_Taken, _o.tBCP_Idle, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of FloorActivity
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FloorActivity: $.ComponentSpec[] = [
    new $.ComponentSpec("tBCP-Request", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("tBCP-Granted", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("tBCP-Deny", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("tBCP-Queued", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("tBCP-Release", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("tBCP-Revoke", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("tBCP-Taken", false, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("tBCP-Idle", false, $.hasTag(_TagClass.context, 8))
];

/**
 * @summary The Trailing Root Component Types of FloorActivity
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FloorActivity: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FloorActivity
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FloorActivity: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FloorActivity: $.ASN1Decoder<FloorActivity> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FloorActivity
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FloorActivity (el: _Element): FloorActivity {
    if (!_cached_decoder_for_FloorActivity) { _cached_decoder_for_FloorActivity = function (el: _Element): FloorActivity {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 8) {
        throw new _ConstructionError("FloorActivity contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "tBCP-Request";
    sequence[1].name = "tBCP-Granted";
    sequence[2].name = "tBCP-Deny";
    sequence[3].name = "tBCP-Queued";
    sequence[4].name = "tBCP-Release";
    sequence[5].name = "tBCP-Revoke";
    sequence[6].name = "tBCP-Taken";
    sequence[7].name = "tBCP-Idle";
    let tBCP_Request!: BOOLEAN;
    let tBCP_Granted!: BOOLEAN;
    let tBCP_Deny!: BOOLEAN;
    let tBCP_Queued!: BOOLEAN;
    let tBCP_Release!: BOOLEAN;
    let tBCP_Revoke!: BOOLEAN;
    let tBCP_Taken!: BOOLEAN;
    let tBCP_Idle!: BOOLEAN;
    tBCP_Request = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(sequence[0]);
    tBCP_Granted = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(sequence[1]);
    tBCP_Deny = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(sequence[2]);
    tBCP_Queued = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(sequence[3]);
    tBCP_Release = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(sequence[4]);
    tBCP_Revoke = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(sequence[5]);
    tBCP_Taken = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(sequence[6]);
    tBCP_Idle = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(sequence[7]);
    return new FloorActivity(
        tBCP_Request,
        tBCP_Granted,
        tBCP_Deny,
        tBCP_Queued,
        tBCP_Release,
        tBCP_Revoke,
        tBCP_Taken,
        tBCP_Idle,
        sequence.slice(8),
    );
}; }
    return _cached_decoder_for_FloorActivity(el);
}

let _cached_encoder_for_FloorActivity: $.ASN1Encoder<FloorActivity> | null = null;

/**
 * @summary Encodes a(n) FloorActivity into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FloorActivity, encoded as an ASN.1 Element.
 */
export
function _encode_FloorActivity (value: FloorActivity, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FloorActivity) { _cached_encoder_for_FloorActivity = function (value: FloorActivity, elGetter: $.ASN1Encoder<FloorActivity>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(8 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeBoolean, $.BER)(value.tBCP_Request, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeBoolean, $.BER)(value.tBCP_Granted, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeBoolean, $.BER)(value.tBCP_Deny, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeBoolean, $.BER)(value.tBCP_Queued, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeBoolean, $.BER)(value.tBCP_Release, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => $._encodeBoolean, $.BER)(value.tBCP_Revoke, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => $._encodeBoolean, $.BER)(value.tBCP_Taken, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => $._encodeBoolean, $.BER)(value.tBCP_Idle, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_FloorActivity(value, elGetter);
}


/* eslint-enable */
