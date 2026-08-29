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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    ManagementExtension,
    _decode_ManagementExtension,
    _encode_ManagementExtension,
} from "@wildboar/attribute-asn1module";

/**
 * @summary ActionInfo
 * @description
 *
 * Information syntax of the confirmed `activate`,
 * `deactivate`, and `deactivateWhenNoUsers` actions
 * (`WITH INFORMATION SYNTAX`). X.723 does not specify
 * which `ManagementExtension` values appear.
 *
 * `activate` initializes the resource for normal use.
 * Supporting objects cannot always be created enabled.
 * Used when procedural status contains Initialization
 * Required and operational state is Disabled. Completes
 * successfully if the resource is or can be enabled;
 * otherwise CMIP `processingFailure`. During the
 * procedure, procedural status is Initializing. On
 * success: Initializing removed, operational state
 * Enabled. On failure: Initialization Required restored,
 * operational state Disabled. Operational state and
 * procedural status need not be visible to management.
 *
 * `deactivate` terminates operation immediately.
 * Succeeds if the resource is or can be disabled;
 * otherwise `processingFailure`. During termination:
 * procedural status Terminating, operational state
 * Disabled. Terminating is cleared when done.
 *
 * `deactivateWhenNoUsers` waits until the user count is
 * zero, then runs the same termination procedure.
 *
 * Registered as `{joint-iso-ccitt ms(9) smi(3) part5(5)
 * action(9) activate(0)}`, `deactivate(1)`, and
 * `deactivateWhenNoUsers(2)`. ITU-T Rec. X.723 (11/1993)
 * [§11.1](https://www.itu.int/rec/T-REC-X.723-199311-I),
 * §11.2, §11.3.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ActionInfo  ::=  SET OF ManagementExtension
 * ```
 */
export
type ActionInfo = ManagementExtension[]; // SetOfType


let _cached_decoder_for_ActionInfo: $.ASN1Decoder<ActionInfo> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ActionInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ActionInfo} The decoded data structure.
 */
export
function _decode_ActionInfo (el: _Element): ActionInfo {
    if (!_cached_decoder_for_ActionInfo) { _cached_decoder_for_ActionInfo = $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension); }
    return _cached_decoder_for_ActionInfo(el);
}


let _cached_encoder_for_ActionInfo: $.ASN1Encoder<ActionInfo> | null = null;


/**
 * @summary Encodes a(n) ActionInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ActionInfo, encoded as an ASN.1 Element.
 */
export
function _encode_ActionInfo (value: ActionInfo, elGetter: $.ASN1Encoder<ActionInfo>): _Element {
    if (!_cached_encoder_for_ActionInfo) { _cached_encoder_for_ActionInfo = $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER); }
    return _cached_encoder_for_ActionInfo(value, elGetter);
}


/* eslint-enable */
