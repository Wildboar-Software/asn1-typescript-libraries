/* eslint-disable */
import {
    type BOOLEAN,
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type CcExtension, _decode_CcExtension, _encode_CcExtension } from "../SS-CC-Operations-asn1-97/CcExtension.ta.mjs";

/**
 * @summary CcRequestRes
 * @description
 *
 * Result of `ccbsRequest` and `ccnrRequest` (ECMA-186 §6.3.1,
 * §6.5.3.1.3). Sent in CONNECT when the signalling connection is
 * retained, or in RELEASE with cause 16 when it is released.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-186/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CcRequestRes ::= SEQUENCE {
 *     no-path-reservation [0] IMPLICIT BOOLEAN DEFAULT FALSE,
 *     retain-service [1] IMPLICIT BOOLEAN DEFAULT FALSE,
 *     extension CcExtension OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class CcRequestRes {
    /**
     * @summary `no_path_reservation`.
     * @description
     *
     * TRUE forces the non-reservation method. The Terminating PINX
     * sets this when it cannot receive a path-reservation CC call
     * (ECMA-186 §6.5.3.1.3). An Outgoing Gateway PINX sets it when the
     * other network cannot reserve a path (§6.6.2, §6.7.2). If absent
     * or FALSE, the Originating PINX may choose either method
     * (§6.5.2.1.3).
     * @public
     * @readonly
     */
    readonly no_path_reservation: OPTIONAL<BOOLEAN>;
    /**
     * @summary `retain_service`.
     * @description
     *
     * TRUE only when `can-retain-service` was TRUE and this PINX can
     * use service retention. Otherwise omit it or send FALSE, and the
     * service is cancelled if User B is busy again (ECMA-186
     * §6.5.2.1.3, §6.5.3.1.3).
     * @public
     * @readonly
     */
    readonly retain_service: OPTIONAL<BOOLEAN>;
    /**
     * @summary `extension`.
     * @description
     *
     * Manufacturer-specific data from `CCExtSet`. ECMA-186 §6.5.3.1.3
     * does not include it in the result that must be sent.
     * @public
     * @readonly
     */
    readonly extension: OPTIONAL<CcExtension>;

    constructor (
        no_path_reservation?: OPTIONAL<BOOLEAN>,
        retain_service?: OPTIONAL<BOOLEAN>,
        extension?: OPTIONAL<CcExtension>
    ) {
        this.no_path_reservation = no_path_reservation;
        this.retain_service = retain_service;
        this.extension = extension;
    }

    /**
     * @summary Restructures an object into a CcRequestRes
     * @description
     * 
     * This takes an `object` and converts it to a `CcRequestRes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CcRequestRes`.
     * @returns {CcRequestRes}
     */
    public static _from_object (_o: { [_K in keyof (CcRequestRes)]: (CcRequestRes)[_K] }): CcRequestRes {
        return new CcRequestRes(_o.no_path_reservation, _o.retain_service, _o.extension);
    }

    /**
     * @summary Getter that returns the default value for `no_path_reservation`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_no_path_reservation () { return false; }
    /**
     * @summary Getter that returns the default value for `retain_service`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_retain_service () { return false; }
}

/**
 * @summary The Leading Root Component Types of CcRequestRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CcRequestRes: $.ComponentSpec[] = [
    new $.ComponentSpec("no-path-reservation", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("retain-service", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("extension", true, $.or($.hasTag(_TagClass.universal, 5), $.hasTag(_TagClass.context, 14), $.hasTag(_TagClass.context, 15)))
];

/**
 * @summary The Trailing Root Component Types of CcRequestRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CcRequestRes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CcRequestRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CcRequestRes: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CcRequestRes: $.ASN1Decoder<CcRequestRes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CcRequestRes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CcRequestRes (el: _Element): CcRequestRes {
    if (!_cached_decoder_for_CcRequestRes) { _cached_decoder_for_CcRequestRes = function (el: _Element): CcRequestRes {
    let no_path_reservation: OPTIONAL<BOOLEAN> = CcRequestRes._default_value_for_no_path_reservation;
    let retain_service: OPTIONAL<BOOLEAN> = CcRequestRes._default_value_for_retain_service;
    let extension: OPTIONAL<CcExtension>;
    const callbacks: $.DecodingMap = {
        "no-path-reservation": (_el: _Element): void => { no_path_reservation = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "retain-service": (_el: _Element): void => { retain_service = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "extension": (_el: _Element): void => { extension = _decode_CcExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CcRequestRes,
        _extension_additions_list_spec_for_CcRequestRes,
        _root_component_type_list_2_spec_for_CcRequestRes,
        undefined,
    );
    return new CcRequestRes(
        no_path_reservation,
        retain_service,
        extension
    );
}; }
    return _cached_decoder_for_CcRequestRes(el);
}

let _cached_encoder_for_CcRequestRes: $.ASN1Encoder<CcRequestRes> | null = null;

/**
 * @summary Encodes a(n) CcRequestRes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CcRequestRes, encoded as an ASN.1 Element.
 */
export
function _encode_CcRequestRes (value: CcRequestRes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CcRequestRes) { _cached_encoder_for_CcRequestRes = function (value: CcRequestRes, _elGetter: $.ASN1Encoder<CcRequestRes>): _Element {
    const _components: _Element[] = [];
    if (value.no_path_reservation !== undefined && !$.deepEq(value.no_path_reservation, CcRequestRes._default_value_for_no_path_reservation)) {
        _components.push(/* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 0, () => $._encodeBoolean, $.BER)(value.no_path_reservation, $.BER));
    }
    if (value.retain_service !== undefined && !$.deepEq(value.retain_service, CcRequestRes._default_value_for_retain_service)) {
        _components.push(/* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 1, () => $._encodeBoolean, $.BER)(value.retain_service, $.BER));
    }
    if (value.extension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_CcExtension(value.extension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_CcRequestRes(value, elGetter);
}

/* eslint-enable */
